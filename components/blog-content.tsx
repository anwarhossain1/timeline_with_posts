"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import Comments from "./comments";

const BlogContent = ({ posts }: any) => {
  return (
    <div className={"pt-8 space-y-8"}>
      {posts.map((post: any, index: number) => (
        <div className={"space-y-4"} key={index}>
          <div className={"space-y-4"}>
            <CardTitle className={"not-prose"}>{post.title}</CardTitle>
            <div className={"flex items-center space-x-4"}>
              <div className="text-base text-zinc-400">Written By</div>
              <div className="text-base text-zinc-500">
                {post.user.username}
              </div>
            </div>
          </div>
          <CardDescription className={"text-base"}>{post.body}</CardDescription>
          <Comments comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
