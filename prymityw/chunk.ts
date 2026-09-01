function chunk<T>(array: T[], size: number): T[][] {
  if (size < 1) throw new Error("size must be a positiv number");

  const output: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    const part = array.slice(i, i + size);
    output.push(part);
  }

  return output;
}

// O(n)

console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
console.log(chunk([1, 2, 3], 5));
console.log(chunk([], 3));