import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Comments = ({ comments }) => {
  const [openComment, setOpenComment] = useState<boolean>(false);
  return (
    <div>
      <div className={"flex justify-end"}>
        <Button
          onClick={() => setOpenComment((prev) => !prev)}
          variant={"outline"}
          className="rounded-full"
        >
          {comments.length} comments{" "}
          {openComment ? <ArrowBigUp /> : <ArrowBigDown />}
        </Button>
      </div>
      {openComment && (
        <div className="space-y-4">
          {comments.map((comment, index: number) => {
            return (
              <div key={index}>
                <div className="text-sm text-zinc-500">{comment.name}</div>
                <div className="text-xs text-zinc-400">{comment.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;
