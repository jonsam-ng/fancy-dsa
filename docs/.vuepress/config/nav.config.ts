/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
  // ========== 基础 ========== //
  {
    text: "数据结构",
    link: "/ds/",
    items: [
      {
        text: "RoadMap",
        link: "/ds/roadmap/",
      },
    ],
  },
  // ========== 机器学习 ========== //
  {
    text: "算法",
    link: "/algorithm/",
    items: [
      {
        text: "RoadMap",
        link: "/algorithm/roadmap/",
      },
    ],
  },
  // ========== 深度学习 ========== //
  {
    text: "LeetCode",
    link: "/leetcode/",
    items: [
      {
        text: "RoadMap",
        link: "/leetcode/roadmap/",
      },
    ],
  },
  { text: "关于", link: "/about/" },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  { text: "博客", link: "https://www.jonsam.site" },
];
