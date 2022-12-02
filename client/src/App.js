import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Parent from "./components/Parent";
import { useEffect } from "react";

function App() {
  const gettoken = localStorage.getItem("jwt");

  return (
    <div className="font-roboto noselect">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/mining-eyes-analytics"
            component={gettoken != "" ? Parent : Login}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
