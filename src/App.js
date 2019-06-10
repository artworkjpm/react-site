import React from "react";
import { Container } from "react-bootstrap";
import Header from "./template-components/Header";
import Footer from "./template-components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./stylesheets/Main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
