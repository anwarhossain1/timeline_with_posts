import BlogContent from "@/components/blog-content";
import { getMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import {
  getPostCommentsData,
  getPostsData,
  getUsersData,
} from "./server-utils";
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export const metadata: Metadata = getMetadata("home");

const Home = async () => {
  const posts = await getPostsData();
  const users = await getUsersData();
  const postComments = await getPostCommentsData();
  const sortedPostsInDescending = posts.sort(
    (a: IPost, b: IPost) => b.id - a.id
  );
  const timeLineContents = sortedPostsInDescending.map((post: IPost) => {
    return {
      title: post.title,
      body: post.body,
      comments: postComments.filter(
        (comment: any) => comment.postId === post.id
      ),
      user: users.find((user: any) => user.id === post.userId),
    };
  });

  return <>{timeLineContents && <BlogContent posts={timeLineContents} />}</>;
};

export default Home;
