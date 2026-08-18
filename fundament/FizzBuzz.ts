const reguly: [number, string][] = [
  [3, "Fizz"],
  [7, "Bazz"],
  [5, "Buzz"],
];

const out: string[] = [];

//reguly.sort((a, b) => a[0] - b[0]);

// 1. Posortować krotke wejściową
// 2. przejsc pętlą po regułach
// 3. zwrócić string

function fizzBuzzLine(n: number, reguly: [number, string][]): string {
  let output = "";

  for (let i = 0; i < reguly.length; i++) {
    if (n % reguly[i][0] === 0) {
      output += reguly[i][1];
    }
  }

  if (output.length === 0) return `${n}`;

  return output;
}

for (let i = 1; i < 101; i++) {
  out.push(fizzBuzzLine(i, reguly));
}

console.log(out);
