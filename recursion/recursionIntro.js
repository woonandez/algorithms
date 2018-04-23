//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion


//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.


//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function countDown(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
};

function countDownRec(num) {
 console.log(num);
 return num === 0 ? num : countDownRec(num - 1);
};

function exponent(base, exp) {
  let result = 1;

  while (exp > 0) {
    result = result * base;
    exp = exp - 1;
  }
  return result;
};

function exponentRec(base, exp, result = 1) {
  return exp === 0 ? result : exponentRec(3, exp - 1, result * base);
};

function recursiveMultipler(arr = [], num = 1, index = 0) {
  if (arr[index]) arr[index] = arr[index] * num;
  return index < arr.length - 1 ? recursiveMultipler(arr, num, index += 1) : arr;
};

function recursiveReverse(arr = [], index = arr.length - 1, result = []) {
  if (arr[index]) result.push(arr[index]);
  return index > 0 ? recursiveReverse(arr, index -= 1, result) : result;
}