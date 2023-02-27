import { AwsRum } from "aws-rum-web";
import React, { createContext, useContext } from "react";

const AnalyticsContext = createContext(null);
export const useAnalytics = () => useContext(AnalyticsContext);

export const AnalyticsProvider = ({ children }) => {
	const useAWSRum = () => {
		console.log("running aws cloudwatch");
		let awsRum = null;

		try {
			const config = {
				sessionSampleRate: 1,
				guestRoleArn: "arn:aws:iam::904142310761:role/RUM-Monitor-eu-west-1-904142310761-5361080936761-Unauth",
				identityPoolId: "eu-west-1:b2fb8c33-cf82-4fca-9fa7-1615fefe5f50",
				endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
				telemetries: ["performance", "errors", "http"],
				allowCookies: true,
				enableXRay: true,
				CustomEvents: {
					Status: "ENABLED",
				},
			};

			const APPLICATION_ID = "7645e840-5bc4-4c45-bf83-517c56892275";
			const APPLICATION_VERSION = "1.0.0";
			const APPLICATION_REGION = "eu-west-1";
			// eslint-disable-next-line
			awsRum = new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
		} catch (error) {
			// Ignore errors thrown during CloudWatch RUM web client initialization
		}

		return awsRum;
	};
	return <AnalyticsContext.Provider value={useAWSRum()}>{children}</AnalyticsContext.Provider>;
};
