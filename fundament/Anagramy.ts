// Dwa słowa są anagramami, jeśli mają te same litery w tej samej liczbie, tylko w innej kolejności.

function isAnagram(a: string, b: string): boolean {
  if (a.toLowerCase().replaceAll(" ", "").split("").sort().join("") === b.toLowerCase().replaceAll(" ", "").split("").sort().join("")) {
    return true;
  }
  return false;
}

function isAnagram2(a: string, b: string): boolean {
  const licznik: Map<string, number> = new Map();
  const aInput = a.toLowerCase().replaceAll(" ", "");
  const bInput = b.toLowerCase().replaceAll(" ", "");

  if (aInput.length !== bInput.length) return false;

  for (const char of aInput) {
    licznik.set(char, (licznik.get(char) || 0) + 1);
  }

  for (const char of bInput) {
    const element = licznik.get(char);
    if (element === undefined) return false;
    if (element <= 1) {
      licznik.delete(char);
    } else licznik.set(char, element - 1);
  }

  if (licznik.size === 0) return true;

  return false;
}

console.log(isAnagram2("listen", "silent"));
console.log(isAnagram2("Rail safety", "fairy  tales"));
console.log(isAnagram2("hello", "world"));
console.log(isAnagram2("abc", "ab"));