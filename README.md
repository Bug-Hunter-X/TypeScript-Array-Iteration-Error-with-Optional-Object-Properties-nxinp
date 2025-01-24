# TypeScript Array Iteration Error with Optional Object Properties

This repository demonstrates a common issue in TypeScript related to iterating over arrays of objects with optional properties.  The `printArray` function seemingly works with various array types, but fails when encountering an array of objects where a property is optional and might be missing in some objects.

The issue stems from the interaction between TypeScript's type system and the runtime behavior of JavaScript. TypeScript allows the creation of arrays with optional properties, but during runtime, accessing a missing optional property can lead to unexpected behavior.  While this code might compile without errors, it is prone to runtime errors.

This example illustrates the problem and provides a solution using optional chaining or type guards to safely access optional properties during iteration.

## How to reproduce the bug

1. Clone this repository.
2. Open the `bug.ts` file.
3. Run the code using a TypeScript compiler (e.g., `tsc bug.ts` followed by `node bug.js`).
4. Observe the runtime error when the `printArray` function attempts to access the missing `age` property. 

## Solution

The `bugSolution.ts` file shows a solution using optional chaining to handle cases where the optional property `age` might be missing, avoiding runtime errors.  Additionally, we use a type guard to handle other potential errors.