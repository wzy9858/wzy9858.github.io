import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "后端",
      icon: "laptop-code",
      prefix: "blogs/后端/",
      //link: "demo/",
      children: "structure",
    },
    {
      text: "java",
      icon:"/svg图标/java.svg",
      prefix: "blogs/java/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
