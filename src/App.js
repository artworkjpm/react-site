import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NotFound from "./pages/NotFound";
import Header from "./template-components/Header";
import Footer from "./template-components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ReactView from "./pages/React";
import Planets from "./pages/react/Planets";
import Vue from "./pages/Vue";
import Angular from "./pages/Angular";
import Webdev from "./pages/WebDev";
import UXExamples from "./pages/UX";
import CRM from "./pages/CRM";
import AppTesting from "./pages/testing/buttons";
import EmailMe from "./pages/EmailMe";
import Bevendean from "./pages/Bevendean";
import ScrollIntoView from "./Router/ScrollIntoView"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./stylesheets/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true
    };
  }

  hideNavigation = () => {
    this.setState({
      showHeader: false
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          {this.state.showHeader && <Header />}

          <Container>
            <ScrollIntoView>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/react" component={ReactView} />
                <Route exact path="/react/planets" component={Planets} />
                <Route exact path="/vue" component={Vue} />
                <Route exact path="/angular" component={Angular} />
                <Route exact path="/webdev" component={Webdev} />
                <Route exact path="/ux" component={UXExamples} />
                <Route exact path="/crm" component={CRM} />

                <Route exact path="/testing/buttons" component={AppTesting} />
                <Route exact path="/emailme" component={EmailMe} />

                <Route
                  exact
                  path="/bevendean"
                  render={() => (
                    <Bevendean hideNavigation={this.hideNavigation} />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </ScrollIntoView>
          </Container>
          {this.state.showHeader && <Footer />}
        </Router>
      </div>
    );
  }
}

export default App;
