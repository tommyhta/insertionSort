uArr = [23,42,4,16,8,15,6,0,33]




function insertionSort(arr){
    for(var i=1; i<arr.length-1; i++){ //consider the first index sorted
        temp=arr[i]  //storing the value at the index for swapping 
        j=i //set the index
        while(j>0 && arr[j-1]> temp){  //the following codes will only execute if the index is larger than 0, and the value on its left is larger than value at the index
            arr[j]=arr[j-1] //if the above condition is true, the number is moved over one space to the left
            j-- //since the number is only move once, there maybe multiple elements in the sorted array, this will minus the index so the loop continue checking other elements
        }
        arr[j]=temp //re-inserted the stored value back at the index, this can be outside of the inside loop, because if the inside loop never happened, this line doesn't change anything
    }
    return arr
}

console.log(insertionSort(uArr))