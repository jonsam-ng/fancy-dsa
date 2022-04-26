/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
	// ========== 基础 ========== //
	{
		text: "数据结构",
		link: "/ds/",
	},
	// ========== 机器学习 ========== //
	{
		text: "算法",
		link: "/algorithm/",
	},
	// ========== 深度学习 ========== //
	{
		text: "LeetCode",
		link: "/leetcode/",
	},
	{ text: "更多", items: [{ text: "关于", link: "/about/" }] },
	{
		text: "索引",
		link: "/archives/",
		items: [
			{ text: "分类", link: "/categories/" },
			{ text: "标签", link: "/tags/" },
			{ text: "归档", link: "/archives/" },
		],
	},
	{ text: "设计模式", link: "http://docs.jonsam.site/project-5/" },
	{ text: "博客", link: "https://www.jonsam.site" },
];
