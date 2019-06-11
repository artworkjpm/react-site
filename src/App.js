import React from "react";
import { Container } from "react-bootstrap";
import NotFound from "./pages/NotFound";
import Header from "./template-components/Header";
import Footer from "./template-components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ReactView from "./pages/React";
import Planets from "./pages/react/Planets";
import AppTesting from "./pages/testing/buttons";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./stylesheets/Main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/react" component={ReactView} />
            <Route exact path="/react/planets" component={Planets} />
            <Route exact path="/testing/buttons" component={AppTesting} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
