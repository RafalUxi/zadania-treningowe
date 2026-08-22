function debounce(fn: () => void, delay: number): () => void {
  let timeoutId: ReturnType<typeof setTimeout>; // to przeżywa kolejne odbicia (jest poziom wyżej)

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

const debounced = debounce(() => console.log("szukam!"), 500);
debounced();
debounced();
debounced();