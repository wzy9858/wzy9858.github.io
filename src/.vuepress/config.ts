import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "菜鸟拯救世界",
  description: "菜鸟拯救世界のblog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,


}
);

