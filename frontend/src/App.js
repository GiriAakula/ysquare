import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import UserDashBoard from "./components/UserDashBoard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
     <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <ProtectedRoute exact path="/dashboard" component={UserDashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
