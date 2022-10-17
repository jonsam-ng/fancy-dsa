// 8-directions Flood Fill
const directions = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, 1],
	[0, -1],
	[1, -1],
	[1, 0],
	[1, 1],
];
const log = console.log;
const map = [
	[0, 0, 0],
	[0, 0, 1],
	[0, 1, 1],
];

const isFalsy = (n) => !n && n !== 0;

function isNodeValid(node) {
	const [x, y] = node;
	const isInBound = (n, arr) => n >= 0 && n <= arr.length - 1;
	if (isFalsy(x) || isFalsy(y) || !isInBound(y, map) || !isInBound(x, map[0]))
		return false;
	return true;
}

function floodFillWithDFS(startNode, targetColor, replaceColor, cb) {
	if (!isNodeValid(startNode)) {
		log("StartNode not valid!", startNode);
		return;
	}
	const [x, y] = startNode;
	const currentColor = map[x][y];
	if (currentColor === targetColor) {
		map[x][y] = replaceColor;
		cb(startNode);
		// flood to neighbors
		directions.forEach(([xi, yi]) => {
			const node = [x + xi, y + yi];
			if (isNodeValid(node))
				floodFillWithDFS(node, targetColor, replaceColor, cb);
		});
	}
}

function floodFillWithBFS(startNode, targetColor, replaceColor, cb) {
	if (!isNodeValid(startNode)) {
		log("StartNode not valid!", startNode);
		return;
	}
	const queue = [startNode];
	while (queue.length) {
		const node = queue.shift();
		const [x, y] = node;
		const currentColor = map[x][y];
		if (currentColor === targetColor) {
			map[x][y] = replaceColor;
			cb(node);
			// flood to neighbors
			directions.forEach(([xi, yi]) => {
				const next = [x + xi, y + yi];
				if (isNodeValid(next)) queue.push(next);
			});
		}
	}
}

function printMap(map) {
	log("=====Map=====");
	map.forEach((r) => {
		log(r.join(","));
	});
}

printMap(map);

// floodFillWithDFS([0, 0], 0, 1, ([x, y]) => {
// 	log("==>" + `x: ${x};y:${y}`);
// });
floodFillWithBFS([0, 0], 0, 1, ([x, y]) => {
	log("==>" + `x: ${x};y:${y}`);
});
printMap(map);
