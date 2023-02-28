import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnalyticsProvider from "./context/analyticsContext";
import About from "./pages/About";
import Angular from "./pages/Angular";
import Bevendean from "./pages/Bevendean";
import CRM from "./pages/CRM";
import EmailMe from "./pages/EmailMe";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ReactView from "./pages/React";
import Planets from "./pages/react/Planets";
import AppTesting from "./pages/testing/buttons";
import UXExamples from "./pages/UX";
import Vue from "./pages/Vue";
import Webdev from "./pages/WebDev";
import ScrollIntoView from "./Router/ScrollIntoView";
import "./stylesheets/App.css";
import Footer from "./template-components/Footer";
import Header from "./template-components/Header";

function App() {
	const [showHeader, setShowHeader] = useState(true);

	return (
		<div className="App">
			<Router>
				<AnalyticsProvider>
					{showHeader && <Header />}
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
								<Route exact path="/bevendean" render={() => <Bevendean hideNavigation={setShowHeader(false)} />} />
								<Route component={NotFound} />
							</Switch>
						</ScrollIntoView>
					</Container>
					{showHeader && <Footer />}
				</AnalyticsProvider>
			</Router>
		</div>
	);
}

export default App;
