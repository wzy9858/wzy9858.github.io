import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/blogs/",
  {
    text: "文章",
    link: "/blogs/",
    icon: "envelope-open-text"
  },
  {
    text: "分类",
    icon: "pen-to-square",
    prefix: "/blogs/",
    children: [
      {
        text: "java",
        icon: "pen-to-square",
        prefix: "java/",
        children: [
          { text: "java基础", icon: "pen-to-square", link: "java基础.md" },
          { text: "javaGUi", icon: "pen-to-square", link: "javaGUI.md" },
          { text: "javaWeb", icon: "pen-to-square", link: "javaWeb.md" },
          { text: "JDBC", icon: "pen-to-square", link: "JDBC.md" },
        ],
      },
      {
        text: "后端",
        icon: "pen-to-square",
        prefix: "后端/",
        children: [
          {
            text: "数据库",
            icon: "pen-to-square",
            link: "数据库.md",
          },
          {
            text: "Linux",
            icon: "pen-to-square",
            link: "Linux总结.md",
          },
          {
            text: "python",
            icon: "pen-to-square",
            link: "python学习笔记.md",
          },
        ],
      },
      { text: "日记", icon: "pen-to-square", link: "/blogs/日记/2024-6.md" },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: "时间轴",
    icon: "clock",
    link: "/timeline/",
  }
]);
