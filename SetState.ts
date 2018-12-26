import { Dispatch, SetStateAction } from "react";

type SetState<T extends {}> = Dispatch<SetStateAction<T>>;

export default SetState;
