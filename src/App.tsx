import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => (
  <Router>
    <Route path="/" component={MainPage} />
  </Router>
);

export default App;
