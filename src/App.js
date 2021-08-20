import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
import Overview from "./screens/overview";
import Details from "./screens/details";

// components
import NavbarSection from "./components/navbarSection";

function App() {
  return (
    <Router className="App">
      <NavbarSection />

      <Switch>
        <Route exact path="/" component={Overview} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
