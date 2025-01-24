function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); // This works fine

let myStringArray: string[] = ['apple', 'banana', 'cherry'];
printArray(myStringArray); // This also works fine

let myMixedArray: (number | string)[] = [1, '2', 3, '4', 5];
printArray(myMixedArray); // This works fine too

let myAnyArray: any[] = [1, '2', true, { a: 1 }, [1, 2, 3]];
printArray(myAnyArray); // This also works fine

// However, if you have an array of objects where the objects
// have properties that are sometimes undefined, it can cause issues:

interface MyObject {
  name: string;
  age?: number; // age is optional
}

let myObjectArray: MyObject[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob' }, // age is missing here
];

printArray(myObjectArray); // This will cause an error in certain TypeScript versions.