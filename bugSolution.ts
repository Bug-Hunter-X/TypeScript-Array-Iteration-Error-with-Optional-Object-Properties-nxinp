function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// ... (rest of the buggy code from bug.ts)

// Solution using optional chaining:
function printArraySafe(arr: MyObject[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name, arr[i].age); //Optional Chaining is not applied here. The code will still produce an error if there's an undefined value.
    console.log(arr[i].name, arr[i].age?.toString()); //Optional Chaining is applied here. This will prevent runtime errors
  }
}

//Solution with Type Guard
function isMyObjectWithAge(obj: any): obj is MyObject & { age: number} {
  return obj.age !== undefined; 
}

function printArrayWithGuard(arr:MyObject[]): void {
    for (const obj of arr) {
        if (isMyObjectWithAge(obj)) {
            console.log(obj.name, obj.age);
        } else {
            console.log(obj.name, 'Age not provided');
        }
    }
}

printArraySafe(myObjectArray);
printArrayWithGuard(myObjectArray);