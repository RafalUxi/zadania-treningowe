const map: Map<string, string> = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

function isBalance(input: string): boolean {
  const newArray: string[] = [];
  const length = input.length;

  if (length === 0) return true;

  for (let i = 0; i < length; i++) {
    const sighOpen: "open" | "close" | "err" = input[i] === "(" ? "open" : input[i] === "[" ? "open" : input[i] === "{" ? "open" : input[i] === ")" ? "close" : input[i] === "]" ? "close" : input[i] === "}" ? "close" : "err";

    if (sighOpen === "open") {
      newArray.push(input[i]);
    } else if (sighOpen === "close") {
      const sigh = newArray.pop();
      if (sigh === undefined) return false;
      if (map.get(sigh) !== input[i]) return false;
    } else if (sighOpen === "err") {
      continue;
    }
  }

  return newArray.length === 0;
}

console.log(isBalance("(aaa)a)"));