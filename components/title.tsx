"use client";

import siteData from "@/blog.config";
import { Separator } from "@/components/ui/separator";

const Title = () => {
  return (
    <div>
      <h1>{siteData?.home?.title}</h1>
      <Separator />
    </div>
  );
};

export default Title;
