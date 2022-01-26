import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {

  return (
    <div className="App">
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/detail/:w">
        <Detail />
      </Route>
    </div>
  );
}

export default App;