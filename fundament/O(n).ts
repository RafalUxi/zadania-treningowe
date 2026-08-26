interface IGracze {
  nick: string;
  gold: number;
}

const graczeO: IGracze[] = [
  { nick: "Aragorn", gold: 120 },
  { nick: "Legolas", gold: 300 },
  { nick: "Gimli", gold: 85 },
];

// dedupe([1, 2, 2, 3, 1, 4])  →  [1, 2, 3, 4]

// A1: dla każdego z n elementów robisz .includes(), które samo przechodzi do n elementów. Ile to razem? Zapisz notację.
function dedupeA1<T>(array: T[]): T[] {
  const output: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}

function dedupeA2<T>(array: T[]): T[] {
  const output = new Set(array);
  return Array.from(output);
}

function groupBy<T>(array: T[], keyFn: (item: T) => string): Map<string, T[]> {
  const kubelek: Map<string, T[]> = new Map();
  for (const i of array) {
    const key = keyFn(i);
    const group = kubelek.get(key); // nie używasz tej samej wartości bo nadpiszesz mape -> dlatego tablica nadpisujesz dłuższą tablicą
    if (group) group.push(i);
    else kubelek.set(key, [i]);
  }

  return kubelek;
}

const test1 = dedupeA1([1, 2, 2, 3, 1, 4]);
const test2 = dedupeA2([1, 2, 2, 3, 1, 4]);
const test3 = groupBy(graczeO, (g) => (g.gold > 100 ? "bogaty" : "biedny"));

console.log(test3);