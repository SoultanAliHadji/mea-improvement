import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import LiveMonitoring from "./components/liveMonitoring/LiveMonitoring";
import ValidasiDeviasi from "./components/validasiDeviasi/ValidasiDeviasi";
import DataTervalidasi from "./components/dataTervalidasi/DataTervalidasi";

function App() {
  return (
    <div className="font-roboto">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={LiveMonitoring} />
          <Route exact path="/validasideviasi" component={ValidasiDeviasi} />
          <Route exact path="/datatervalidasi" component={DataTervalidasi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;