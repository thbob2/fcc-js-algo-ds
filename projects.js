const palindrome = (str) => {
	let regex = /[\W_]/g;
	let lowStr = str.replace(regex, '').toLowerCase();
	let reverseStr = lowStr.split('').reverse().join('');

	if (lowStr == reverseStr) {
		return true;
	} else {
		return false;
	}
};

/*
.########...#######..##.....##....###....##....##.....######...#######..##....##.##.....##.########.########..########.########.########.
.##.....##.##.....##.###...###...##.##...###...##....##....##.##.....##.###...##.##.....##.##.......##.....##....##....##.......##.....##
.##.....##.##.....##.####.####..##...##..####..##....##.......##.....##.####..##.##.....##.##.......##.....##....##....##.......##.....##
.########..##.....##.##.###.##.##.....##.##.##.##....##.......##.....##.##.##.##.##.....##.######...########.....##....######...########.
.##...##...##.....##.##.....##.#########.##..####....##.......##.....##.##..####..##...##..##.......##...##......##....##.......##...##..
.##....##..##.....##.##.....##.##.....##.##...###....##....##.##.....##.##...###...##.##...##.......##....##.....##....##.......##....##.
.##.....##..#######..##.....##.##.....##.##....##.....######...#######..##....##....###....########.##.....##....##....########.##.....##
*/

const convertToRoman = (num) => {
	const myMap = [
		{
			roman: 'M',
			decimalV: 1000,
		},
		{
			roman: 'CM',
			decimalV: 900,
		},
		{
			roman: 'D',
			decimalV: 500,
		},
		{
			roman: 'CD',
			decimalV: 400,
		},
		{
			roman: 'C',
			decimalV: 100,
		},
		{
			roman: 'XC',
			decimalV: 90,
		},
		{
			roman: 'L',
			decimalV: 50,
		},
		{
			roman: 'XL',
			decimalV: 40,
		},
		{
			roman: 'X',
			decimalV: 10,
		},
		{
			roman: 'IX',
			decimalV: 9,
		},
		{
			roman: 'V',
			decimalV: 5,
		},
		{
			roman: 'IV',
			decimalV: 4,
		},
		{
			roman: 'I',
			decimalV: 1,
		},
	];
	let romanStr = '';

	myMap.forEach((e) => {
		while (e.decimalV <= num) {
			romanStr += e.roman;
			num -= e.decimalV;
		}
	});

	return romanStr;
};

/*
..######..########..######.....###....########......######..##....##.########..##.....##.########.########.
.##....##.##.......##....##...##.##...##.....##....##....##..##..##..##.....##.##.....##.##.......##.....##
.##.......##.......##........##...##..##.....##....##.........####...##.....##.##.....##.##.......##.....##
.##.......######....######..##.....##.########.....##..........##....########..#########.######...########.
.##.......##.............##.#########.##...##......##..........##....##........##.....##.##.......##...##..
.##....##.##.......##....##.##.....##.##....##.....##....##....##....##........##.....##.##.......##....##.
..######..########..######..##.....##.##.....##.....######.....##....##........##.....##.########.##.....##
*/

const rot13 = (str) => {
	const Acode = 'A'.charCodeAt();
	const Ncode = 'N'.charCodeAt();
	const Zcode = 'Z'.charCodeAt();
	let strArray = [...str].map((e) => {
		const code = e.charCodeAt();
		if (Acode <= code && code <= Zcode) {
			if (code < Ncode) {
				return String.fromCharCode(code + 13);
			} else {
				return String.fromCharCode(code - 13);
			}
		} else {
			return e;
		}
	});

	return strArray.join('');
};

module.exports = {
	palindrome,
	convertToRoman,
	rot13,
};
