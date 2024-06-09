import BlogContent from "@/components/blog-content";
import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { getPostsData } from "./server-utils";

export const metadata: Metadata = getMetadata("home");

const Home = () => {
  return (
    <>
      <BlogContent posts={getPostsData()} />
    </>
  );
};

export default Home;
