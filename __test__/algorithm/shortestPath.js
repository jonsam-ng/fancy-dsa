/**
 *
 * @param {*} graph graph with neighbors
 * @param {*} s start node
 * @param {*} t target node
 */
function BFSShortestPath(graph, s, t) {
	const initPath = [s];
	if (t === s) return initPath;

	const visited = new Set(),
		paths = [initPath];

	// flood with BFS
	while (paths.length) {
		const path = paths.shift();
		// newest node of this path
		const node = path[path.length - 1];
		if (!visited.has(node)) {
			// we find it
			if (node === t) return path;
			// visit this node
			visited.add(node);
			// find more paths
			graph[node].forEach((node) => {
				// only flood to unvisited area to avoid loop
				if (!visited.has(node)) {
					// we find a new path to be visit
					const nextPath = path.concat([node]);
					// we can pre-return during flood
					if (node === t) return nextPath;

					paths.push(nextPath);
				}
			});
		}
	}

	//  target not reachable
	return [];
}
