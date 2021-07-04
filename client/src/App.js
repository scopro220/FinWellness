import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import MetricsPage from "./pages/MetricsPage";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/:googleId" exact component={UserPage} />
        <Route path="/:googleId/metrics" exact component={MetricsPage} />
      </Router>
    </div>
  );
}

export default App;
