import { avg, sum, sum3 } from "../src/index";

describe("avg should calculate an avergae properly", () => {
  test("three positive number", () => {
    expect(avg(3, 4, 5)).toBe(4);
  });
  test("three negative number", () => {
    expect(avg(3, -4, -5)).toBe(-2);
  });
});

describe("sum3 should calculate sum properly", () => {
  test("three positives numbers", () => {
    expect(sum3(1, 2, 3)).toBe(6);
  });
});

describe("sum should calculate sum properly", () => {
  test("two positives numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
