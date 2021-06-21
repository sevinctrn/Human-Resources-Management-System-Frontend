import "./App.css";
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";
import { Container } from "semantic-ui-react";
import { routes } from "./Routing";
import "semantic-ui-css/semantic.min.css";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Switch>
          {routes.map((route) => (
            <Route exact={route.exact} path={route.path} key={route.title}>
              {" "}
              <Dashboard> {route.component} </Dashboard>{" "}
            </Route>
          ))}
        </Switch>
      </Container>
      <div className="page-container">
        <div className="content-wrap">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
