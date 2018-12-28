import { Reconstitute } from "../TypeFunctions";

test("reconstitute should", () => {
  type extras = { c: number };
  type final = { a: number, b: number } & extras;
  const res = Reconstitute<final, extras>({ a: 1, b: 2 }, { c: 3 });
  expect(res).toEqual({ a: 1, b: 2, c: 3 });
});