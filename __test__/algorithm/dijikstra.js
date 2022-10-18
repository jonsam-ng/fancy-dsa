/**
 *
 * @param {*} V Number of vertexes
 * @param {*} E edge formatted by (u, v, w)
 * @param {*} s start node
 */
function dijkstra(V, E, s) {
	// create adjacent graph
	const graph = new Array(V).fill().map(() => []);
	// fill all edges
	E.forEach((edge) => {
		const [u, v, w] = edge;
		graph[u].push([v, w]);
		graph[v].push([u, w]);
	});
	// create records, (weight, parent, visited)
	// @fixed see https://github.com/nodejs/node/issues/4093, you cannot just use []
	// also see https://stackoverflow.com/questions/35578478/array-prototype-fill-with-object-passes-reference-and-not-new-instance
	const records = new Array(V).fill().map(() => [Infinity, -1, false]);
	records[s][0] = 0;
	// relax V-1 times
	for (let i = 0; i < V - 1; i++) {
		// find parent node to relax
		let p = -1;
		for (let j = 0; j < V; j++) {
			const [w, , visited] = records[j];
			const [pw] = records[p] ?? [Infinity];
			// if not initialized, or next min weight found, we will relax it then
			if (!visited && (p === -1 || w < pw)) p = j;
		}
		// mark next as visited
		records[p][2] = true;
		// relax neighbors
		graph[p].forEach((edge) => {
			const [v, w] = edge;
			const [weight, , visited] = records[v];
			const [pWeight] = records[p];
			if (!visited && w + pWeight < weight) {
				records[v][0] = w + pWeight;
				records[v][1] = p;
			}
		});
	}
	return records;
}

const V = 9;
const E = [
	[0, 1, 4],
	[0, 7, 8],
	[1, 7, 11],
	[1, 2, 8],
	[7, 8, 7],
	[6, 7, 1],
	[2, 8, 2],
	[6, 8, 6],
	[5, 6, 2],
	[2, 5, 4],
	[2, 3, 7],
	[3, 5, 14],
	[3, 4, 9],
	[4, 5, 10],
];

const distances = dijkstra(V, E, 0);
console.log("==>", { distances });
// [
// 	[0, -1, true],  => []
// 	[4, 0, true],   => [0,1]
// 	[12, 1, true],  => [0,1,2]
// 	[19, 2, true],  => [0,1,2,3]
// 	[21, 5, false], => [0,7,6,5,4]
// 	[11, 6, true],  => [0,7,6,5]
// 	[9, 7, true],   => [0,7,6]
// 	[8, 0, true],   => [0,7]
// 	[14, 2, true],  => [0,1,2,8]
// ];
