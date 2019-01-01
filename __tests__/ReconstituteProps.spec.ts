import { ReconstituteProps } from "../TypeFunctions";

test("reconstitute should", () => {
  type extras = { c: number };
  type props = { a: number, b: number, c: string };
  type final = props & extras;
  const res: final = ReconstituteProps<final, extras>({ a: 1, b: 2 }, { c: 3 });
  expect(res).toEqual(<final>{ a: 1, b: 2, c: 3});
});
