function linearSearch(array, searchTerm) {

	for(let i = 0; i < Sarray.length; i++){
		if(array[i] == searchTerm){
			return i
		}
	}
	return null;
}

module.exports = linearSearch;













/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
