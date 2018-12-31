import { ReactNode } from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const ReconstituteFunctionComponent: <TFinal extends TOther, TOther extends object, TDontCare extends object>
    (props: Omit<TFinal, keyof (TOther)> & TDontCare & { children?: ReactNode }, other: TOther) => TFinal =
    <TFinal extends TOther, TOther extends object, TDontCare extends object>
        (props: Omit<TFinal, keyof (TOther)> & TDontCare & { children?: ReactNode }, other: TOther) => {
        return { ...props, ...other } as unknown as TFinal;
    };

export type TupleToObject<TIn extends any[], TOut extends object> = (tup: TIn) => TOut;
