function moveZeros(arr) {
	const newArr = [];
	const nulls = [];
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] !== 0) {
			newArr.push(arr[i]);
		} else {
			nulls.push(arr[i]);
		}
	}
	return arr = [...newArr, ...nulls];
}

module.exports = moveZeros;