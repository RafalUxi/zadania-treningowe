//countFrequency, który bierze coś (string albo tablicę) i zwraca mapę zliczeń — ile razy każdy element wystąpił.
// "aabbbc"  →  { a: 2, b: 3, c: 1 }
// funkcja przyjmuje string zwraca obiekt {string: number}
// record - string - klucz, number - wartość

function countFrequency(input: string): Record<string, number> {
  const licznik: Record<string, number> = {};
  for (const char of input) {
    licznik[char] = (licznik[char] || 0) + 1;
  }
  return licznik;
}

function countFrequencyMap(input: string): Map<string, number> {
  const licznik: Map<string, number> = new Map();
  for (const char of input) {
    licznik.set(char, (licznik.get(char) || 0) + 1);
  }

  return licznik;
}

console.log(countFrequency("aaaaabbc"));
console.log(countFrequencyMap("aaaaabbc"));