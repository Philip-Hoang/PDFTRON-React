import React, { Suspense } from "react";
import "./App.css";
// import Layout from "./Components/Layout/Layout";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoadSpinner from "./Components/Commons/LoadSpinner";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadSpinner />}>
        <Switch>
          {routes.map((route, idx) => (
            <Route key={idx + 1} {...route} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

//Suspens - https://reactjs.org/docs/concurrent-mode-suspense.html
//        - added a <Suspense> component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) while we’re waiting:
