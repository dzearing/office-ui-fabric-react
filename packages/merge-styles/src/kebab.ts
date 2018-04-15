export function kebab(value: string): string {
  return value.replace(/([A-Z])/g, '-$1').toLowerCase();
}