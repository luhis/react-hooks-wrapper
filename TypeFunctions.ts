import { ReactNode } from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const ReconstituteFunctionComponent: <TFinal extends TOther, TOther, TDontCare>
    (props: Omit<TFinal, keyof (TOther)> & TDontCare & { children?: ReactNode }, other: TOther) => TFinal =
    <TFinal extends TOther, TOther, TDontCare>
        (props: Omit<TFinal, keyof (TOther)> & TDontCare & { children?: ReactNode }, other: TOther) => {
        return { ...props, ...other } as unknown as TFinal;
    };
