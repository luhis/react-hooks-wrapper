import { ReconstituteFunctionComponent } from "../TypeFunctions";

test("reconstitute should", () => {
  type extras = { c: number };
  type final = { a: number, b: number, c: string } & extras & other;
  type other = { z: string };
  const res: final = ReconstituteFunctionComponent<final, extras, other>({ a: 1, b: 2, z: "z" }, { c: 3 });
  expect(res).toEqual(<final>{ a: 1, b: 2, c: 3, z: "z" });
});
