function fisherYatesShuffle(seq) {
	const len = seq.length;
	let p = len;
	// shuffle from right to left
	for (let i = len - 1; i >= 0; i--) {
		const j = ~~(Math.random() * p--);
		[seq[i], seq[j]] = [seq[j], seq[i]];
	}
	return seq;
}

console.log(fisherYatesShuffle([1, 2, 3, 4, 5, 6, 7, 8]));

module.exports = fisherYatesShuffle;
