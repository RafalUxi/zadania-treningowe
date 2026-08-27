function binarySearch(array: number[], target: number): number {
  let right = array.length - 1;
  let left = 0;

  if (array.length === 0) return -1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// złożoność logn- dziele na pół za każdym razem - n=10 -> 10/2=5/2=2,5/2=1,25... (około 3 pytania)
// w przypadku złożoności n - 10 zapytań etc.

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));
console.log(binarySearch([], 1));
console.log(binarySearch([5], 5));
console.log(binarySearch([5], 3));