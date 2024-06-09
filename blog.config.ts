// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

const siteData: any = {
  author: "someone", // author name
  title: "Thoughts", // website title
  description:
    "A minimalist timeline of posts created with Next.js ,Shadcn-ui and Tailwind.css", // website description
  theme: "light", // light | dark
  language: "zh-CN", // zh-CN | en
  header: {
    logo: "/logo.png", //  /public/logo.png
    title: "Thoughts", // header title
  },
  home: {
    title: "Welcome to Thoughts",
  },
};

export default siteData;
