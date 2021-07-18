export function dailyTemperatures(temperatures: number[]): number[] {
  const differences: number[] = [];
  const result = new Array<number>(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length - 1; i++) {
    differences[i] = temperatures[i] - temperatures[i + 1];
  }

  for (let i = 0; i < temperatures.length - 1; i++) {
    if (differences[i] < 0) {
      result[i] = 1;
    } else {
      let difference = differences[i];
      let dayCount = 1;
      let found = true;

      while (difference >= 0) {
        difference += differences[i + dayCount];

        if (dayCount++ + i >= differences.length) {
          found = false;
          break;
        }
      }

      if (found) {
        result[i] = dayCount;
      }
    }
  }

  return result;
}
