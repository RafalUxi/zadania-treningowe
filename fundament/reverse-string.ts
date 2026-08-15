function reverseString_newString(Str: string) {
  const text_length: number = Str.length;
  let outputString: string = "";

  for (let i = text_length - 1; i > -1; i--) {
    outputString += Str[i];
  }
  return outputString;
}

function reverseString_newArray(Str: string) {
  return Str.split("").reverse().join("");
}

function reverseString_recurenction(Str: string): string {
  if (Str.length === 0) return "";
  return reverseString_recurenction(Str.slice(1)) + Str[0];
}

const newString = reverseString_newString("siema");
const newArray = reverseString_newArray("siema");
const recurenction = reverseString_recurenction("siema");

console.log(`1: ${newString}, 2: ${newArray}, 3: ${recurenction}`);