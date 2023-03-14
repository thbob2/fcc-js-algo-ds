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

module.exports = {
	palindrome,
};
