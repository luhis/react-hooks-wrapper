import { ReconstituteFunctionComponent } from "../TypeFunctions";

test("reconstitute should", () => {
  type extras = { c: number };
  type final = { a: number, b: number, c: string } & extras;
  const res: final = ReconstituteFunctionComponent<final, extras>({ a: 1, b: 2 }, { c: 3 });
  expect(res).toEqual(<final>{ a: 1, b: 2, c: 3});
});
