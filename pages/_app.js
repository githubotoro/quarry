import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import Script from "next/script";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
	// const router = useRouter();

	// useEffect(() => {
	// 	const handleRouteChange = (url) => {
	// 		gtag.pageview(url);
	// 	};
	// 	router.events.on("routeChangeComplete", handleRouteChange);
	// 	return () => {
	// 		router.events.off("routeChangeComplete", handleRouteChange);
	// 	};
	// }, [router.events]);

	return (
		<>
			{/* <Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
			/>

			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname, });`,
				}}
			/> */}

			<GoogleAnalytics trackPageViews />

			<Navbar />
			<Component {...pageProps} />
		</>
	);
}
