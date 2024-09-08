import { memoize } from "../../src/leetcode/memoize-2623";

test("memoize should prevent duplicate calls", () => {
  let callCount = 0;
  const memoizedFn = memoize(function (a: number, b: number) {
    callCount += 1;
    return a + b;
  });

  memoizedFn(2, 3);
  memoizedFn(2, 3);
  expect(callCount).toBe(1);
});
