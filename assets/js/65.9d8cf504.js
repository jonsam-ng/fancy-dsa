(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{426:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("在组合数学，一个集的元素的组合是一个子集。S 的一个 k - 组合是 S 的一个有 k 个元素的子集。若两个子集的元素完全相同并顺序相异，它仍视为同一个组合，这是组合和排列不同之处。")]),t._v(" "),s("h2",{attrs:{id:"回溯法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回溯法"}},[t._v("#")]),t._v(" 回溯法")]),t._v(" "),s("p",[t._v("回溯法（英语：backtracking）是"),s("strong",[t._v("暴力搜寻法")]),t._v("中的一种。")]),t._v(" "),s("p",[t._v("对于某些计算问题而言，回溯法是一种可以找出所有（或一部分）解的"),s("strong",[t._v("一般性算法")]),t._v("，尤其适用于"),s("strong",[t._v("约束满足问题")]),t._v("（在解决约束满足问题时，我们逐步构造更多的候选解，并且在确定某一部分候选解不可能补全成正确解之后放弃继续搜索这个部分候选解本身及其可以拓展出的子候选解，转而测试其他的部分候选解）。")]),t._v(" "),s("p",[t._v("在经典的教科书中，"),s("strong",[t._v("八皇后问题")]),t._v("展示了回溯法的用例。（八皇后问题是在标准国际象棋棋盘中寻找八个皇后的所有分布，使得没有一个皇后能攻击到另外一个。）")]),t._v(" "),s("p",[t._v("回溯法采用"),s("strong",[t._v("试错")]),t._v("的思想，它尝试"),s("strong",[t._v("分步")]),t._v("的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现，现有的分步答案不能得到有效的正确的解答的时候，它将"),s("strong",[t._v("取消")]),t._v("上一步甚至是上几步的计算，再通过其它的可能的"),s("strong",[t._v("分步解答")]),t._v("再次尝试寻找问题的答案。回溯法通常用最简单的"),s("strong",[t._v("递归")]),t._v("方法来实现，在反复重复上述的步骤后可能出现两种情况：")]),t._v(" "),s("ul",[s("li",[t._v("找到一个可能存在的正确的答案")]),t._v(" "),s("li",[t._v("在尝试了所有可能的分步方法后宣告该问题没有答案")])]),t._v(" "),s("p",[t._v("在最坏的情况下，回溯法会导致一次复杂度为"),s("strong",[t._v("指数时间")]),t._v("的计算。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("尝试错误法")]),t._v(" "),s("p",[t._v("尝试错误法，又称"),s("strong",[t._v("试误法")]),t._v("（英语：trial and error），简称试错，是用来解决问题、获取知识的常见方法。此种方法可以视为简易解决问题的方法中的一种，"),s("strong",[t._v("与使用洞察力／直觉或理论推理的方法正好相反")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("h3",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  Problem: Given two numbers, n and k, make all unique combinations of k numbers from 1 to n and in sorted order\n\n  What is combinations?\n  - Combinations is selecting items from a collections without considering order of selection\n\n  Example:\n  - We have an apple, a banana, and a jackfruit\n  - We have three objects, and need to choose two items, then combinations will be\n\n  1. Apple & Banana\n  2. Apple & Jackfruit\n  3. Banana & Jackfruit\n\n  To read more about combinations, you can visit the following link:\n  - https://betterexplained.com/articles/easy-permutations-and-combinations/\n\n  Solution:\n  - We will be using backtracking to solve this questions\n  - Take one element, and make all them combinations for k-1 elements\n  - Once we get all combinations of that element, pop it and do same for next element\n*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Combinations")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will be used for storing current combination")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("combinations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findCombinations")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("high "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("combinations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("combinations\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findCombinations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("combinations\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br")])]),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),s("p",[t._v("注意组合与排列的区别，参考：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/algorithm/string/createPermutations/#介绍"}},[t._v("CreatePermutations [全排列] | Fancy DSA")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000039774631",target:"_blank",rel:"noopener noreferrer"}},[t._v("回溯算法 —— 子集、组合、排列问题"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/en/Combinations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Combination - Wikiwand"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/zh-hans/%E7%B5%84%E5%90%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合 - Wikiwand"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://betterexplained.com/articles/easy-permutations-and-combinations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Easy Permutations and Combinations – BetterExplained"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/en/backtracking",target:"_blank",rel:"noopener noreferrer"}},[t._v("Backtracking - Wikiwand"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/zh-hans/%E5%9B%9E%E6%BA%AF%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("回溯法 - Wikiwand"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);