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
import ScrollIntoView from "./Router/ScrollIntoView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./stylesheets/App.css";

import { AwsRum } from "aws-rum-web";

let awsRum = null;

try {
	const config = {
		sessionSampleRate: 1,
		guestRoleArn: "arn:aws:iam::904142310761:role/RUM-Monitor-eu-west-1-904142310761-5361080936761-Unauth",
		identityPoolId: "eu-west-1:b2fb8c33-cf82-4fca-9fa7-1615fefe5f50",
		endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
		telemetries: ["performance", "errors", "http"],
		allowCookies: true,
		enableXRay: false,
	};

	const APPLICATION_ID = "7645e840-5bc4-4c45-bf83-517c56892275";
	const APPLICATION_VERSION = "1.0.0";
	const APPLICATION_REGION = "eu-west-1";
	// eslint-disable-next-line
	awsRum = new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
} catch (error) {
	// Ignore errors thrown during CloudWatch RUM web client initialization
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showHeader: true,
		};
	}

	hideNavigation = () => {
		this.setState({
			showHeader: false,
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

								<Route exact path="/bevendean" render={() => <Bevendean hideNavigation={this.hideNavigation} />} />
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
