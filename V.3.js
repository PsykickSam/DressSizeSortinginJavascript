const sizeList = [
	"XL",
	"5L",
	"4L",
	"XXL",
	"XS",
	"S",
	"XXXXL",
	"XXXXXL",
	"XXXL",
	"XXXS",
	"L",
	"3L",
	"2L",
	"1L",
	"M",
	"XXS"
];

let count = 0;

const dressSizeSortingAlgorithm = (a, b) => {
	let isNaNA = parseInt(a);
	let isNaNB = parseInt(b);

	let isAS = a.length === 1 && a[0] === "S" ? true : false;
	let isAM = a.length === 1 && a[0] === "M" ? true : false;
	let isAL = a.length === 1 && a[0] === "L" ? true : false;

	let isBS = b.length === 1 && b[0] === "S" ? true : false;
	let isBM = b.length === 1 && b[0] === "M" ? true : false;
	let isBL = b.length === 1 && b[0] === "L" ? true : false;

	let isAExecute = true;
	let isBExecute = true;

	if (isAS || isAM || isAL) {
		isAExecute = false;
	}

	if (isBS || isBM || isBL) {
		isBExecute = false;
	}

	if (isNaNA && isNaNB) {
		isAExecute = false;
		isBExecute = false;
		isAL = true;
		isBL = true;
	} else if (isNaNA && !isNaNB) {
		isBExecute = false;
		isBL = true;
	} else if (!isNaNA && isNaNB) {
		isAExecute = false;
		isAL = true;
	}

	if (isAExecute) {
		for (let i = a.length - 1; i >= 0; i--) {
			count += 1;

			a[i] === "S"
				? (isAS = true)
				: a[i] === "M"
				? (isAM = true)
				: a[i] === "L"
				? (isAL = true)
				: "";

			if (isAS || isAM || isAL) break;
		}
	}

	if (isBExecute) {
		for (let i = b.length - 1; i >= 0; i--) {
			count += 1;

			b[i] === "S"
				? (isBS = true)
				: b[i] === "M"
				? (isBM = true)
				: b[i] === "L"
				? (isBL = true)
				: "";

			if (isBS || isBM || isBL) break;
		}
	}

	return isAM || isBM
		? isAM && isBL
			? 1
			: isAL && isBM
			? -1
			: isBM && isBS
			? -1
			: isAS && isBM
			? 1
			: -1
		: isAL && isBL
		? isNaNA && isNaNB
			? a.length + parseInt(a) - 1 < b.length + parseInt(b) - 1
				? 1
				: -1
			: isNaNA
			? a.length + parseInt(a) - 1 < b.length
				? 1
				: -1
			: isNaNB
			? a.length < b.length + parseInt(b) - 1
				? 1
				: -1
			: a.length < b.length
			? 1
			: -1
		: isAL && isBS
		? -1
		: isAS && isBL
		? 1
		: isAS
		? a.length < b.length
			? -1
			: 1
		: 0;
};

const beautifulPrint = (arr) => {
  arr.forEach((value, index) => {
    console.log(`${index + 1} - ${value}`);
  });
};

sizeList.sort((a, b) => {
	count += 1;
	return dressSizeSortingAlgorithm(a, b);
});

beautifulPrint(sizeList);
console.log("Array Length: " + sizeList.length);
console.log("Max. Iteration: " + count);