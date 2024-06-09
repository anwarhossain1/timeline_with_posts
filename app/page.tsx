import BlogContent from "@/components/blog-content";
import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import {
  getPostCommentsData,
  getPostsData,
  getUsersData,
} from "./server-utils";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const metadata: Metadata = getMetadata("home");

const Home = async () => {
  const posts = await getPostsData();
  const users = await getUsersData();
  const postComments = await getPostCommentsData();
  const timeLineContents = posts.map((post) => {
    return {
      title: post.title,
      body: post.body,
      comments: postComments.filter(
        (comment: any) => comment.postId === post.id
      ),
      user: users.find((user: any) => user.id === post.userId),
    };
  });
  console.log(timeLineContents);
  return <>{timeLineContents && <BlogContent posts={timeLineContents} />}</>;
};

export default Home;
