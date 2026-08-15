// Palidron
// Na początku trzeba przerobić input tak żeby był ciągiem małych liter
// Potem 2 wskaźniki

function isPalindrome(input: string): boolean {
  input = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  let right = input.length - 1;
  let left = 0;
  while (left < right) {
    if (input[left] !== input[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("aka"));