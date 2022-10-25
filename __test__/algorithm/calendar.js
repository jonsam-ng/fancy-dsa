/**
 * Print calendar of YYYY/MM
 */
function calendar(year, month) {
	const d = new Date(`${year}-${month}-01`).getDay(),
		firstDay = d === 0 ? 7 : d;
	const daysInMonth = new Date(year, month, 0).getDate();
	d;

	const cells = [
		...new Array(d - 1).fill(null),
		...new Array(daysInMonth).fill(null).map((_, i) => i + 1),
	];
	cells;
	const table = cells.reduce((s, v, i) => {
		s += (v === null ? "  " : v < 10 ? ` ${v}` : v) + "\t";
		if ((i + 1) % 7 === 0) s += "\n";
		return s;
	}, "");

	console.info(`周一\t周二\t周三\t周四\t周五\t周六\t周日\t`);
	console.info(table);
}
calendar(2022, 9);
