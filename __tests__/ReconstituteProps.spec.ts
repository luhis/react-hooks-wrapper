import { ReconstituteProps } from "../src/Index";

test("reconstitute should", () => {
  interface IExtras { readonly c: number; }
  interface IProps { readonly a: number; readonly b: number; readonly c: string; }
  type final = IProps & IExtras;
  const res: final = ReconstituteProps<final, IExtras>({ a: 1, b: 2 }, { c: 3 });
  expect(res).toEqual({ a: 1, b: 2, c: 3} as final);
});
