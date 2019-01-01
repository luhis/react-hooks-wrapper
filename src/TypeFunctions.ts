import { FunctionComponent, ReactNode } from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const ReconstituteProps =
    <TFinal extends TOther, TOther extends object>
        (props: Omit<TFinal, keyof (TOther)> & { readonly children?: ReactNode }, other: TOther) =>
        ({ ...props, ...other } as unknown as TFinal);

export type TupleToObject<TLeft, TRight, TOut extends object> = (_: [TLeft, TRight]) => TOut;

export type Func<TIn extends object, TOut extends object> = (_: TIn) => TOut;

export const Compose: <TReturn extends object, TIn extends object, TIntermediary extends object>
    (a: Func<FunctionComponent<TIntermediary>, FunctionComponent<TReturn>>,
     b: Func<FunctionComponent<TIn>, FunctionComponent<TIntermediary>>)
    => Func<FunctionComponent<TIn>, FunctionComponent<TReturn>> =
    (a, b) => (p) => a(b(p));
