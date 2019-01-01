import React from "react";

import Effect from "./Effect";
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
      </>
    );
};

export default App;
