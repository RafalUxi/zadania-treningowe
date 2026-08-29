function fakeFetchNext(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 2) reject(new Error(`request ${id} padł`));
      else resolve(`dane-${id}`);
    }, 1000);
  });
}

async function fetchAllOrNothing(ids: number[]): Promise<string[]> {
  const promisMap = ids.map((id) => fakeFetchNext(id));
  const data = await Promise.all(promisMap);
  return data;
}
// promise.all - więc całośc 1 sekunda; brak catch i tak zwróci new Error z fakeFetchNext
// jak wyrzuca błąd to odrzuca wszystkie dane jeden new error

async function fetchWhatweCan(ids: number[]): Promise<PromiseSettledResult<string>[]> {
  const promisMap = ids.map((id) => fakeFetchNext(id));
  const data = await Promise.allSettled(promisMap);
  return data;
}

type Wynik = { ok: true; value: string[]; errors: unknown[] } | { ok: false; error: unknown };

async function fetchSafely(ids: number[]): Promise<Wynik> {
  try {
    const promisMap = ids.map((id) => fakeFetchNext(id).catch((e) => e));
    const data = await Promise.all(promisMap);
    const val = data.filter((dane) => typeof dane === "string");
    const err: unknown[] = data.filter((dane) => typeof dane !== "string");
    return {
      ok: true,
      value: val,
      errors: err,
    };
  } catch (error) {
    return { ok: false, error: error }; // Tutaj catch nie potrzeny -> catch wyżej konweruje dane
  }
}

fetchSafely([1, 2, 3]).then((out) => {
  if (out.ok) {
    console.log(out.value);
    console.log(out.errors);
  } else {
    console.log(out.error);
  }
});

fetchAllOrNothing([1, 2, 3]).then((out) => console.log(out));
fetchWhatweCan([1, 2, 3]).then((out) =>
  out.forEach((res) => {
    if (res.status === "fulfilled") {
      console.log(res.value);
    } else {
      console.log(res.reason);
    }
  }),
);
