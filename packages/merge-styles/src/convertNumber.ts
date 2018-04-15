export function convertNumber(value: number, map: string): string {
  const result: string[] = [];
  const length = map.length;

  while (value >= 0) {
    const currentValue = value % length;

    result.unshift(map[currentValue]);
    value = Math.floor(value / length) - 1;
  }

  return result.join('');
}
