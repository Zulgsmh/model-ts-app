export function sum(a: number, b: number): number {
  const sum = a + b;
  return sum;
}

export function sum3(a: number, b: number, c: number): number {
  return a + b + c;
}
export function avg(a: number, b: number, c: number): number {
  return sum3(a, b, c) / 3;
}
