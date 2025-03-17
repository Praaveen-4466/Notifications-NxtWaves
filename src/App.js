import React, { Component } from "react";
import UserContext from "./UserContext.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return <UserContext></UserContext>;
  }
}

export default App;
