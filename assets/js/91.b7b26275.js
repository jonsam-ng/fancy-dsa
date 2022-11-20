(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{451:function(a,s,t){"use strict";t.r(s);var n=t(1),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("给定一个大小为 N 的数组 "),s("code",[a._v("arr[]")]),a._v(" ，任务是找出 "),s("code",[a._v("arr[]")]),a._v("  内总和最大的连续子数组。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.14x4wqtvxpsw.webp",loading:"lazy"}})]),a._v(" "),s("p",[a._v("Kadane 算法的想法是维护一个变量 max_ending_here，它存储了结束于当前索引的最大连续子数，一个变量 max_so_far 存储了迄今为止发现的连续子数的最大总和，每当 max_ending_here 中出现一个正和值时，将其与 max_so_far 进行比较，如果它大于 max_so_far 则更新 max_so_far。")]),a._v(" "),s("p",[a._v("伪代码：")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[a._v("Initialize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    max_so_far "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" INT_MIN\n    max_ending_here "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\nLoop "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" each element of the "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("array")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" max_ending_here "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" max_ending_here "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("max_so_far "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" max_ending_here"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            max_so_far "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("max_ending_here")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("max_ending_here "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            max_ending_here "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" max_so_far\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("注意：上述算法只有在"),s("strong",[a._v("至少有一个正数的情况下才起作用")]),a._v("，否则就不起作用，即如果一个数组包含所有的负数就不起作用。")]),a._v(" "),s("p",[a._v("遵循以下步骤来实施这一想法：")]),a._v(" "),s("ul",[s("li",[a._v("初始化变量 max_so_far = INT_MIN 和 max_ending_here = 0")]),a._v(" "),s("li",[a._v("运行一个 for 循环，从 0 到 N-1，对于每个索引 i。\n"),s("ul",[s("li",[a._v("将 arr [i] 添加到 max_ending_here。")]),a._v(" "),s("li",[a._v("如果 max_so_far 小于 max_ending_here，那么更新 max_so_far 到 max_ending_here。")]),a._v(" "),s("li",[a._v("如果 max_ending_here < 0，则更新 max_ending_here = 0。")])])]),a._v(" "),s("li",[a._v("返回 max_so_far")])]),a._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("p",[a._v("如  "),s("code",[a._v("[-2,1,-3,4,-1,2,1,-5,4]")]),a._v(" 。当想要计算某个元素之前的最大连续子数组和时，有两种情况：前面的和加上该元素、该元素本身。因此，在每次循环之中取两者的最大值并不断更新结果。")]),a._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),s("h3",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[a._v("#")]),a._v(" JavaScript")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* Kadane's algorithm is one of the most efficient ways to\n * calculate the maximum contiguous subarray sum for a given array.\n * Below is the implementation of kadanes's algorithm along with\n * some sample test cases.\n * There might be a special case in this problem if al the elements\n * of the given array are negative. In such a case, the maximum negative\n * value present in the array is the answer.\n *\n * Reference article :- https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/\n */")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kadaneAlgo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" cummulativeSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" maxSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NEGATIVE_INFINITY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// maxSum has the least possible value")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    cummulativeSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cummulativeSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("maxSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" cummulativeSum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      maxSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cummulativeSum\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cummulativeSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      cummulativeSum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" maxSum\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// This function returns largest sum contiguous sum in a array")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("p",[a._v("或者：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kadaneAlgo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("nums")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" localMax  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    localMax "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" localMax "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    max "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" localMax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("如果全部是正数，则全数组是最大连续子数组。")]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Largest Sum Contiguous Subarray (Kadane's Algorithm) - GeeksforGeeks"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/96014673",target:"_blank",rel:"noopener noreferrer"}},[a._v("算法面试题 —— 动态规划 Kadane’s algorithm - 知乎"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);