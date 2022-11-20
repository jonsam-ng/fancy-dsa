(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{457:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("记忆化（英语：memoization，缓存化）是一种提高计算机程序执行速度的优化技术。通过储存大计算量函数的返回值，当这个结果再次被需要时将其从缓存提取，而不用再次计算来节省计算时间。")]),t._v(" "),s("p",[t._v("记忆化是一种典型的在计算时间与电脑记忆体空间之中取得平衡的方案。")]),t._v(" "),s("p",[t._v("缓存函数可以通过高阶函数实现。")]),t._v(" "),s("h2",{attrs:{id:"高阶函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数"}},[t._v("#")]),t._v(" 高阶函数")]),t._v(" "),s("p",[t._v("在数学和计算机科学中，高阶函数是至少满足下列一个条件的函数：")]),t._v(" "),s("ul",[s("li",[t._v("接受一个或多个函数作为输入")]),t._v(" "),s("li",[t._v("输出一个函数")])]),t._v(" "),s("p",[t._v("在数学中它们也叫做"),s("strong",[t._v("算子")]),t._v("（运算符）或"),s("strong",[t._v("泛函")]),t._v("。微积分中的导数就是常见的例子，因为它映射一个函数到另一个函数。在函数式编程中，返回另一个函数的高阶函数被称为"),s("strong",[t._v(" Curry 化的函数")]),t._v("。如排序函数，接受一个比较函数作为参数、filter 函数、fold 函数、apply（英语：apply）函数、函数复合（英语：Function composition (computer science)）、积分、回调函数等。")]),t._v(" "),s("p",[t._v("对其他函数进行操作的函数，无论是把它们作为参数还是返回值，都被称为"),s("strong",[t._v("高阶函数")]),t._v("（higher-order functions）。高阶函数允许我们对动作进行抽象，而不仅仅是数值。它们有几种形式。例如，我们可以有创建新函数的函数。")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://eloquentjavascript.net/05_higher_order.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Higher-Order Functions :: Eloquent JavaScript"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/zh-hans/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("高阶函数 - Wikiwand"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.geeksforgeeks.org/higher-order-functions-currying/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Higher Order Functions and Currying - GeeksforGeeks"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("h3",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @function memoize\n * @description ->\n * From [Wikipedia](https://en.wikipedia.org/wiki/Memoization),\n * memoization is an optimization technique used primarily to speed up computer programs,\n * by storing the results of expensive function calls and returning the cached result when the same inputs occur again\n * This function is a first class objects, which lets us use it as [Higher-Order Function](https://eloquentjavascript.net/05_higher_order.html) and return another function\n * @param {Function} func Original function\n * @param {Map} cache - it's receive any cache DS which have get, set & has method\n * @returns {Function} Memoized function\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memoize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cache "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("jsonReplacer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if the value is Set it's converted to Array cause JSON.stringify can't convert Set")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if the value is Map it's converted to Object cause JSON.stringify can't convert Map")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Arguments converted to JSON string for use as a key of Map - it's easy to detect collections like -> Object and Array\n     * If the args input is -> [new Set([1, 2, 3, 4]), {name: 'myName', age: 23}]\n     * Then the agrsKey generate to -> '[[1,2,3,4],{\"name\":\"myName\",\"age\":23}]' which is JSON mean string\n     * Now it's ready to be a perfect key for Map\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" argsKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonReplacer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Checks if the argument is already present in the cache, then return the associated value / result */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argsKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argsKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** If the argument is not yet present in the cache, execute original function and save its value / result in cache, finally return it */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// spread all args")]),t._v("\n    cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argsKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("JSON.stringify()")]),t._v("  方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 "),s("strong",[t._v("replacer 函数")]),t._v("，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地"),s("strong",[t._v("仅包含数组指定的属性")]),t._v("。参见："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON.stringify() | MDN"),s("OutboundLink")],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("JSON.stringify(value[, replacer [, space]])")]),t._v(" 。")]),t._v(" "),s("li",[t._v("replacer：如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。")]),t._v(" "),s("li",[t._v("space：指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。")])])])]),t._v(" "),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),s("h3",{attrs:{id:"高阶组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件"}},[t._v("#")]),t._v(" 高阶组件")]),t._v(" "),s("p",[t._v("高阶组件（HOC，higher-order component）是 React 中重用组件逻辑的一种高级技术。HOC 本身不是 React API 的一部分。它们是一种从 React 的组合（compositional）性质中出现的模式。参见："),s("a",{attrs:{href:"https://reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Higher-Order Components – React"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/en/Memoization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memoization - Wikiwand"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.wikiwand.com/zh-hans/%E8%AE%B0%E5%BF%86%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("记忆化 - Wikiwand"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);