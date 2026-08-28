function twoSum(array: number[], target: number): [number, number] | null {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

// podwójna pętla n^2

function twoSumMap(array: number[], target: number): [number, number] | null {
  const map = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    const test = target - array[i];
    const id = map.get(test);
    if (id !== undefined) return [id, i];
    map.set(array[i], i);
  }

  return null;
}

// pojedyńcza pętla i sprawdzanie mapy => n+1

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSumMap([2, 7, 11, 15], 9));
