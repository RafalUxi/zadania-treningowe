console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// console log jest synchroniczny więc  pierwszy się odpali > 1 > 4 > potem odpali sie promise microtask (3) > macrotask (2)

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.resolve();
  })
  .then(() => console.log("D"));
console.log("E");

// A>E>>C>D>B
// 2x microtask *drugi then wydłuża liste microtasków

async function f() {
  console.log("1");
  await null;
  console.log("2");
}
console.log("start");
f();
console.log("end");

// start>>1>>end>2
// await powoduje, że reszta kodu w funkcji jest microtaskiem

console.log("start"); // 1 async

setTimeout(() => console.log("timeout1"), 0);

Promise.resolve().then(() => {
  console.log("promise1");
  setTimeout(() => console.log("timeout2"), 0);
});

Promise.resolve().then(() => console.log("promise2"));

console.log("end"); // 2 async

// start > end > promise1 > promise2 > timeout1 > timeout2
// na początku sync > potem pierwszy promise i tutaj dokłada się 2 zadanie macrotask timeout2 > promise2 (2 microtask) > timeout1 >timeout2