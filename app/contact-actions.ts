"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  values?: { name: string; email: string; message: string };
};

export async function sendContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const field = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  const name = field("name");
  const email = field("email");
  const message = field("message");
  const values = { name, email, message };
  const error = (message: string): ContactState => ({ status: "error", message, values });

  if (field("website")) return error("Unable to send this message.");
  if (!name || name.length > 100 || /[\r\n]/.test(name)) {
    return error("Please enter your name (up to 100 characters).");
  }
  if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    return error("Please enter a valid email address.");
  }
  if (!message || message.length > 5000) {
    return error("Please enter a message (up to 5,000 characters).");
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return error("Email is unavailable. Please email asyncnavi@gmail.com directly.");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "Navraj Portfolio <onboarding@resend.dev>",
        to: ["asyncnavi@gmail.com"],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      console.error("Contact email rejected by Resend", response.status);
      return error("Your message could not be sent. Please try again or email asyncnavi@gmail.com.");
    }
    return { status: "success", message: "Message sent. Thanks for reaching out!" };
  } catch {
    return error("We could not confirm sending. Please try again later or email asyncnavi@gmail.com.");
  }
}
