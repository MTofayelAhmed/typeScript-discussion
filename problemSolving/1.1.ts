{
  // Design a TypeScript function repeatString that takes two parameters: a string and a number.
  //    The function should return a new string that repeats the input string the specified number of
  //   times.

  function repeatString(str: string, num: number): string {
    return str.repeat(num);
  }

  const repeatResult = repeatString("Tofayel", 5);

  // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the
  //  largest number in the array.

  const findLargestNumber = (nums: number[]): number => {
    return Math.max(...nums);
  };
  console.log(findLargestNumber([1, 2, 6, 100]));
}
