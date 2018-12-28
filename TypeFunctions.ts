
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const Reconstitute = <TFinal extends TOther, TOther extends {}>(props: Omit<TFinal, keyof (TOther)>, other: TOther): TFinal => {
    return { ...props, ...other } as unknown as TFinal;
};
