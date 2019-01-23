package me.com.insertionSort;

public class Main {

    public static void main(String[] args) {
	    int[] uAr = {3,0,4,1,2,5};

	    cLog(insertionSort(uAr));

    }


    public static int[] insertionSort(int[] arr){
		for(int i = 1; i<arr.length-1; i++){
			int temp = arr[i];
			//since the variable j needs to be used in both outside and inside of the 2nd for loop, it needs to be declared on a upper level
			int j;
			for(j = i; j>0 && arr[j-1]>temp; j--){
				arr[j] = arr[j-1];
			}
			arr[j]=temp;
		}
		return arr;
	}



    public static void cLog(int[] arr){
		for(int i =0; i<arr.length; i++){
			System.out.println(arr[i]);
		}
	}


}
