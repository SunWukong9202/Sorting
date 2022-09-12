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
    // this.mix(arr);
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
    let swaps = false;
    let length = arr.length;
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - (i + 1);  j++) {
        greatest = arr[j];
        if(greatest > arr[j + 1]) {
          swaps = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], greatest];
        }
      }
      if(!swaps) break;
    }
  },

  selectionSort: function selectionSort(arr) {
    let smallest = 0;
    let smallest_index = 0;
    let length = arr.length;
    for(let i = 0; i < length; i++) {
      smallest = arr[i];
      smallest_index = i;
      for(let j = i; j < length - 1; j++) {
        if(arr[j+1] < smallest) {
          smallest = arr[j + 1];
          smallest_index = j + 1;
        }
      }
      [arr[smallest_index], arr[i]] = [arr[i], smallest];
    }
  },

  //algorithms with n*lg(n)
  quickSort: function quickSort(arr) {
    let left = 0, right = arr.length - 1;
    function inner(arr, left, right) {
      let aux = left - 1;
      let auxleft = left;
      if(left >= right) return;
      while(left < right) {
        if(arr[left] < arr[right]) {
          aux++
          [arr[aux], arr[left]] = [arr[left], arr[aux]];
        }
        left++;
      }
      [arr[aux + 1], arr[right]] = [arr[right], arr[aux + 1]];
      inner(arr, auxleft, aux);
      inner(arr, aux + 2, right);
    }
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
    let inner = (arr, left, right) => {
      let pivot = Math.floor(arr.length / 2);
      left = arr.slice(0, pivot), right = arr.slice(pivot, arr.length);
      if(arr.length == 1) return;
      inner(left, 0, 0);
      inner(right, 0, 0);
      this.merge(arr, left, right);
    }
    inner(arr, 0, 0);
  },

  merge: function merge(arr, left, right) {
    let i = 0, j = 0, k = 0;
    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        arr[k] = left[i];
        k++; i++;
      } else {
        arr[k] = right[j];
        k++; j++;
      }
    }
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



  