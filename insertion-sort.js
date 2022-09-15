function insertionSort(array) {

	for(let i = 1; i < array.length; i++){
		let now = array[i]
		let before = i-1
		while(before > -1 && now < array[before]){
			array[before+1] = array[before]
			before -= 1;
		}
	array[before+1] = now
	}

	return array;
}

module.exports = insertionSort;