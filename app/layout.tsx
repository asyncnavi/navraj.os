import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import { profile, site, skillGroups } from "@/content/portfolio";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const ogImage = "/navraj-profile.png";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s · navraj.s" },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "navraj.s",
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Founding Engineer",
  worksFor: { "@type": "Organization", name: "Marzi by Primus" },
  url: site.url,
  email: profile.email,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skillGroups
    .filter((g) => ["Languages", "Data", "Infrastructure"].includes(g.label))
    .flatMap((g) => g.items),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${spaceMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
