export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      // Check if current temperature is bigger than the temperature in the last position of the stack
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    if (!stack.length) {
      result.push(0);
    } else {
      result.push(stack[stack.length - 1] - i);
    }

    stack.push(i);
  }

  return result.reverse();
}
