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
  "XXS",
];

let count = 0;

sizeList.sort((a, b) => {
  count += 1;

  const isAS = a.includes("S");
  const isAM = isAS ? false : a.includes("M");
  const isAL = isAM || isAS ? false : a.includes("L");

  const isBS = b.includes("S");
  const isBM = isBS ? false : b.includes("M");
  const isBL = isBM || isBS ? false : b.includes("L");

  // As includes in 'O(n) iterations'
  count += a.length + b.length

  return isAM || isBM
		? isAM && isBL
			? 1
			: isAL && isBM
			? -1
			: isAM && isBS
			? -1
			: isAS && isBM
			? 1
			: -1
		: isAL && isBL
		? !isNaN(parseInt(a)) && !isNaN(parseInt(b))
			? a.length + parseInt(a) - 1 < b.length + parseInt(b) - 1
				? 1
				: -1
			: !isNaN(parseInt(a))
			? a.length + parseInt(a) - 1 < b.length
				? 1
				: -1
			: !isNaN(parseInt(b))
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
});

const beautifulPrint = (arr) => {
  arr.forEach((value, index) => {
    console.log(`${index + 1} - ${value}`);
  });
};

beautifulPrint(sizeList);
console.log("Array Length: " + sizeList.length);
console.log("Max. Iteration: " + count);
