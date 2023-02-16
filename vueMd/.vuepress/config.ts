import theme from "./theme.js";
import animation from 'vuepress-plugin-ribbon-animation-lzp';
export default {
  base: "/",

  plugins: [
    animation()
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  shouldPrefetch: false,
};
