import "./rxjs-imports";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Users } from "./components/Users";

export const App = () => (
  <Provider store={store}>
    <Users />
  </Provider>
);
