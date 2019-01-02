import { FunctionComponent, ReactNode } from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface IReactChildren { readonly children?: ReactNode; }

export const ReconstituteProps =
    <TFinal extends TOther, TOther extends object>
        (props: Omit<TFinal, keyof (TOther)> & IReactChildren, other: TOther) =>
        ({ ...props, ...other } as (TFinal & IReactChildren));

export type TupleToObject<TLeft, TRight, TOut extends object> = (_: [TLeft, (_: TRight) => void]) => TOut;

export type Func<TIn extends object, TOut extends object> = (_: TIn) => TOut;

export const Compose = <TReturn extends object, TIn extends object, TIntermediary extends object>
    (a: Func<FunctionComponent<TIntermediary>, FunctionComponent<TReturn>>,
     b: Func<FunctionComponent<TIn>, FunctionComponent<TIntermediary>>) =>
    (p: FunctionComponent<TIn>) => a(b(p));
