function fibs(n) {
  // 1. If n <= 0, return []
  // 2. If n === 1, return [0]
  // 3. Start with: const arr = [0, 1];
  // 4. Loop: for (let i = 2; i < n; i++)
  //      push arr[i - 1] + arr[i - 2]
  // 5. Return arr
}

console.log(fibs(0));  // []
console.log(fibs(1));  // [0]
console.log(fibs(2));  // [0, 1]
console.log(fibs(8));  // [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
  console.log("This was printed recursively");

  // Base cases:
  //   n <= 0 → return []
  //   n === 1 → return [0]
  //   n === 2 → return [0, 1]

  // Recursive step:
  //   const prev = fibsRec(n - 1);
  //   const next = prev[prev.length - 1] + prev[prev.length - 2];
  //   return [...prev, next];
}

console.log(fibsRec(8));