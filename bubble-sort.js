function bubbleSort(array) {
	
let change = false;
for(let i = 0; i < array.length; i++){
    change - false;


    for(let x = 0; x < array.length; x++){
        if(array [x] > array [x +1]){
            let temp = array[x]
            array [x] = array [x +1]
            array [x +1] = temp
            change = true;
        }
    }
    if (!change){
        return array;
    }
}
    
	return array;
}

module.exports = bubbleSort;
/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements Sand swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */