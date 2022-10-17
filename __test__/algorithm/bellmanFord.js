/**
 *
 * @param {*} graph graph format with Array of (src, dest, weight)
 * @param {*} V Number of vertex
 * @param {*} E Number of edges
 * @param {*} src start node, index of graph
 */
function bellmanFord(graph, V, E, src) {
	// init
	const dis = new Array(V).fill(Infinity);
	dis[src] = 0;

	function relax(cb) {
		for (let j = 0; j < E; j++) {
			const v = graph[j];
			if (dis[v[0]] + v[2] < dis[v[1]]) cb(v);
		}
	}

	// relax all edges N-1 times
	for (let i = 0; i < V - 1; i++) {
		relax((v) => {
			dis[v[1]] = dis[v[0]] + v[2];
		});
	}

	// check for negative circles by relax one more time
	let hasCircle = false;
	relax(() => {
		hasCircle = true;
	});
	if (hasCircle) return null;

	return dis;
}

bellmanFord();
