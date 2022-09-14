export default{//random with same probability of appear
  randomInt: function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  },
 
  getUnrepetedArray: function getUnrepetedArray(n) {
    let set = new Set();  
    let arr = [];  
    while(set.size < n) {
      set.add(this.randomInt(0,2*n));
    }
    set.forEach((value) => arr.push(value));
    set = null;
    return arr;  
  },
  //utility functions
  getColumnsLength: function getColumnsLength(min, max, m) {
    let cols = [], i = 0;
    while(i < m) {
      cols.push(this.randomInt(+min, +max));
      i++;
    }
    return cols;
  },

  //sorting algortithms

  //sorting with O(n^2)
  bubbleSort: function bubbleSort(arr) {
    let greatest = 0;
    //set a flag for get out in sorted arr's
    let swaps = false;
    //I think this avoid go to the referenced obj to obtain the value in a loop
    let length = arr.length;
    //do n comparations
    for(let i = 0; i < length; i++) {
      //hidde the biggest elem's we found
      for(let j = 0; j < length - (i + 1);  j++) {
        //we assume that the first or nth elem is the biggest
        greatest = arr[j];
        //we corroborate if that is true
        if(greatest > arr[j + 1]) {
          swaps = true; //is not sorted
          //if it is then we swaps the elem's
          [arr[j], arr[j + 1]] = [arr[j + 1], greatest];
        }
      }
      if(!swaps) break;
    }
  },

  selectionSort: function selectionSort(arr) {
    //setup a var for the smallest value
    let smallest = 0;
    //also one for the index of such value
    let smallest_index = 0;
    let length = arr.length;//same as bubble
    for(let i = 0; i < length; i++) {
      //we assume that, 0 or nth elem is the smallest 
      smallest = arr[i];
      //also we save the index value
      smallest_index = i;
      for(let j = i; j < length - 1; j++) {
        // we corroborate that indeed it is the smallest
        if(arr[j+1] < smallest) {
          //if not then we do some adjust, by that i mean that nth+1 would be
          //the smallest and it will be compared against the rest of elem's in the arr
          smallest = arr[j + 1];
          smallest_index = j + 1;
        }
      }
      //finally we do a swap in such way that the smallest elem would become the first elem
      [arr[smallest_index], arr[i]] = [arr[i], smallest];
    }
  },

  //algorithms with n*lg(n)
  quickSort: function quickSort(arr) {
    //define left and rigth as the reference to the two ends of the array 
    let left = 0, right = arr.length - 1;
    //define an inner function to use recursion
    function inner(arr, left, right) {
      //we define an auxiliar index to do swaps
      let aux = left - 1;
      //define an aux for left which would be the index agains we compare
      let auxleft = left;
      //base case
      if(left >= right) return;
      //we compare the most right hand(pivot) element with every element before it
      while(left < right) {
        //we swaps every element that is lower than the pivot
        //because of "aux" all elements before it would be less than the pivot
        //and all after it would be greater than it 
        if(arr[left] < arr[right]) {
          aux++
          [arr[aux], arr[left]] = [arr[left], arr[aux]];
        }
        left++;
      }
      //the pivot must be at the pos of "aux" + 1, so we make a swap
      [arr[aux + 1], arr[right]] = [arr[right], arr[aux + 1]];
      //we repeat like if we would be do a tree traversal
      inner(arr, auxleft, aux);
      inner(arr, aux + 2, right);
    }
    //call the inner function to init the alg
    inner(arr, left, right);
  },

  shellSort: function shellShort(arr) {
    let length = arr.length;
    function inner(interval) {
      let i = 0, j = 0;
      if(!interval) return;
      while(i < length - interval) {
        j = i;
        while(j < length - interval) {
          if(arr[j] > arr[j + interval]) {
            [arr[j], arr[j + interval]] = [arr[j + interval], arr[j]];
          }
        j++;
        }
        i++;
      }
      inner(Math.floor(interval/2));
    }
    inner(Math.floor(length/2));
  },

  mergeSort: function mergeSort(arr) {
    //we define a inner function to perform the recursion
    let inner = (arr, left, right) => {
      //we define a pivot to divide the array in two
      let pivot = Math.floor(arr.length / 2);
      //we create two array each one with the left or right part of the whole array
      left = arr.slice(0, pivot), right = arr.slice(pivot, arr.length);
      //case base when array length is 1, that means holds only 1 elem
      if(arr.length == 1) return;
      //we repeat like if we deal with a tree traversal 
      inner(left, 0, 0);
      inner(right, 0, 0);
      //one time if it reach the left and right side of one subarray, tus we merge both
      this.merge(arr, left, right);
    }
    //we init the algorithm exec
    inner(arr, 0, 0);
  },

  merge: function merge(arr, left, right) {
    let i = 0, j = 0, k = 0;
    //while either one array still holds some elem we repeat
    while(i < left.length && j < right.length) {
      //if nth elem of left array is lower,then it is added to the array 
      if(left[i] < right[j]) {
        arr[k] = left[i];
        k++; i++;
      } else {
        arr[k] = right[j];
        k++; j++;
      }
    }
    //if "k" stil not reach "arr's" length, then we search for the rest elem's
    while(k < arr.length) {
      if(i == left.length) {
        arr[k] = right[j];
        k++; j++;
      } else {
        arr[k] = left[i];
        k++; i++;
      }
    }
  },
}



  