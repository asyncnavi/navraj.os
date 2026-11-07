import Desktop from "@/components/Desktop";
import { getPosts } from "@/lib/posts";

export default function Home() {
  return <Desktop posts={getPosts()} />;
}
