"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const BlogContent = ({ posts }: any) => {
  return (
    <div className={"pt-8 space-y-8"}>
      {posts.map((post: any, index: number) => (
        <div className={"space-y-4"} key={index}>
          <div className={"space-y-4"}>
            <CardTitle className={"not-prose"}>{post.title}</CardTitle>
            {/* <div className={'flex items-center space-x-4'}>
                            <Time date={post.time}/>
                            <div className={'space-x-2'}>
                                {post?.tags?.map((tag: string, index: number) => (
                                    <Badge key={index} variant={'secondary'}>
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div> */}
          </div>
          <CardDescription className={"text-base"}>{post.body}</CardDescription>
          <div className={"flex justify-end"}>
            <Button>{post.comments.length} comments</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
