interface IGracze {
  nick: string;
  gold: number;
}

const graczeFilter: IGracze[] = [
  { nick: "Aragorn", gold: 120 },
  { nick: "Legolas", gold: 300 },
  { nick: "Gimli", gold: 85 },
];

function myFilter<T>(array: T[], callback: (value: T, index: number) => boolean): T[] {
  const newArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const bogaci = myFilter(graczeFilter, (dane) => dane.gold > 100);

console.log(bogaci);