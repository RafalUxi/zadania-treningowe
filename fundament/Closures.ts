// makeCounter() — zwraca funkcję, która przy każdym wywołaniu daje kolejną liczbę.

function makeCounter(): () => number {
  let number = 0;
  return () => {
    ``;
    number++;
    return number;
  };
}
const c = makeCounter();
c(); // 1
c(); // 2
console.log(c()); // 3

// makeAdder(x) — zwraca funkcję dodającą x do argumentu.
// x zostaje „zamrożone” w domknięciu.

function makeAdder(input: number): (num: number) => number {
  return (num: number) => input + num;
}

const add5 = makeAdder(5);
add5(10); // 15
console.log(add5(3)); // 8

// once(fn) — opakowuje fn tak, że odpala się tylko raz; kolejne wywołania są ignorowane (albo zwracają pierwszy wynik).

function once(fn: () => void): () => void {
  let called = false;
  return () => {
    if (!called) {
      called = true;
      fn();
    }
  };
}

const init = once(() => console.log("init!"));
init(); // "init!"
init(); // nic
init(); // nic
