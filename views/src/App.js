import React from "react";
import Router from "./Router/Router";
import ContextProvider from "./Components/Context/Context";

export default function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
}
