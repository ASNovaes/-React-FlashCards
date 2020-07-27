import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import FlashCards from "../Pages/FlashCards";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FlashCards" component={FlashCards} />
      </Switch>
    </BrowserRouter>
  );
}
