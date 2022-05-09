import Vue from "vue";
// 判断是否绑定时间是否绑定成功
let isMounted = false;

export default {
	mounted() {
		if (isMounted) return;
		import("vue-core-video-player").then(function (m) {
			Vue.use(m.default, {
				lang: "zh-CN",
			});
		});
		isMounted = true;
	},
};
