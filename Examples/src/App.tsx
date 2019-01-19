import React from "react";

import Effect from "./Effect";
import ClassWithState from "./LegacyExamples/ClassWithState";
import MemoState from "./MemoState";
import Reducer from "./Reducer";
import State from "./State";

const App: React.FunctionComponent = () => {
    return (
      <>
        State:
        <State name="matt from App.tsx" />
        Effect:
        <Effect />
        Reducer:
        <Reducer name="hello from app.tsx"/>
        Memo:
        <MemoState name="hello from app.tsx"/>
        Class:
        <ClassWithState name="matt"/>
      </>
    );
};

export default App;
