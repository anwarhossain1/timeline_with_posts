import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { getPostsData } from "./server-utils";

export const metadata: Metadata = getMetadata("home");

const Home = async () => {
  const posts = await getPostsData();
  console.log(posts);
  return <>{/* <BlogContent posts={getPostsData()} /> */}</>;
};

export default Home;
