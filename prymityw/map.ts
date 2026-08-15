interface IGracze {
  nick: string;
  gold: number;
}

const gracze: IGracze[] = [
  { nick: "Aragorn", gold: 120 },
  { nick: "Legolas", gold: 300 },
  { nick: "Gimli", gold: 85 },
];

// Jak zdefiniu funkcję jako wejście > typ > wyjście typ (generics) to znaczy, że na wyjściu mam ten sam typ co na wejściu
// <T> - nieważne jaki typ
// callback to funkcja wykonywana na tablicy przy każdej iteracji for
// array tablica generic - jeśli istnieje zdefiniowany array np [0] to zwórć coś lub undefined
// teraz trzeba przejsc przez elementy tablicy wejściowej i określić wartości przez funkcje callbackfn
function myMap<T, U>(array: T[], callbackfn: (value: T, index: number) => U): U[] {
  const newArray: U[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i], i));
  }
  return newArray;
}

const nicks = myMap(gracze, (dane) => {
  return dane.nick;
});

const gold = myMap(gracze, (dane) => {
  return dane.gold;
});

const goldStrings = myMap(gracze, (dane) => {
  return `${dane.nick}: ${dane.gold} gold`;
});

const bonus = myMap(gracze, (dane, index) => {
  return `${index + 1}. ${dane.nick}`;
});

console.log(nicks, gold, goldStrings, bonus);
