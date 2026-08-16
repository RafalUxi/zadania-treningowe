interface IGracze {
  nick: string;
  gold: number;
}

const graczeReduce: IGracze[] = [
  { nick: "Aragorn", gold: 120 },
  { nick: "Legolas", gold: 300 },
  { nick: "Gimli", gold: 85 },
];

// reduce zwija całą tablicę do jednej wartości

function myReduce<T>(input: T[], callbackfn: (acc: T, curr: T) => T, initialValue?: T): T {
  if (initialValue === undefined && input.length === 0) throw new Error("Reduce of empty array with no initial value");

  let acc: T = initialValue !== undefined ? initialValue : input[0];
  const start = initialValue === undefined ? 1 : 0;

  for (let i = start; i < input.length; i++) {
    acc = callbackfn(acc, input[i]);
  }

  return acc;
}

const total = myReduce([120, 300, 85], (acc, cur) => acc + cur, 0); // 505
console.log(total);