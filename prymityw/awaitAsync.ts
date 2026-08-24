// Setup — udawany request
function fakeFetch(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`dane-${id}`), 1000);
  });
}
async function fetchSequential(ids: number[]): Promise<string[]> {
  const output: string[] = [];
  let time = Date.now();
  console.log(`Start(Sequential): ${time}`);

  for (const id of ids) {
    const data = await fakeFetch(id);
    output.push(data);
  }

  time -= Date.now();
  console.log(`Stop(Sequential): ${time * -1}`);

  return output;
}

async function fetchParallel(ids: number[]): Promise<string[]> {
  let time = Date.now();
  console.log(`Start(Parallel): ${time}`);
  const stack = ids.map((id) => fakeFetch(id));
  const data = await Promise.all(stack);

  time -= Date.now();
  console.log(`Stop(Parallel): ${time * -1}`);

  return data;
}

fetchSequential([1, 2, 3]).then((out) => console.log(out));
fetchParallel([1, 2, 3]).then((out) => console.log(out));