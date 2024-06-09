// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

const siteData: any = {
  author: "someone", // author name
  title: "Thoughts", // website title
  description:
    "A minimalist timeline of posts created with Next.js ,Shadcn-ui and Tailwind.css", // website description
  theme: "light", // light | dark
  language: "zh-CN", // zh-CN | en
  githubRepo: "https://github.com/imyuanli/next-blog", //
  header: {
    logo: "/logo.png", //  /public/logo.png
    title: "Thoughts", // header title
  },

  home: {
    title: "Welcome to NextBlog",

    // introduction or about me
    intro: "Intro", // file path of the introduction
    socials: {
      email: "286547316@qq.com",
      github: "https://github.com/imyuanli",
      twitter: "https://twitter.com",
      linkedin: "",
      facebook: "",
      instagram: "",
      youtube: "",
    },
  },

  blog: {
    title: "My Blog",
    description:
      "All of my long-fesign, and more, collected in chronological order.",
  },
};

export default siteData;
