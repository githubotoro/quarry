import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { InvisibleNavbar } from "@/components/InvisibleNavbar";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import * as gtag from "../lib/gtag";
import Script from "next/script";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
	usePageViews({ ignoreHashChange: true });

	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>The Quarry Savegames</title>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>

				<meta property="og:url" content="https://quarry.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="The Quarry Savegames -- Get your perfect ending today!"
				/>
				<meta
					property="og:description"
					content="The Quarry doesn't have any 'Save' option, so I played the 
					entire game + created saves for all the major decisions which lead to perfect ending 
					(everyone lives + 12 chapter trophies + most collectibles) -- just choose
					your save file and start playing! :)"
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>
				<meta
					name="description"
					content="The Quarry doesn't have any 'Save' option, so I played the 
					entire game + created saves for all the major decisions which lead to perfect ending 
					(everyone lives + 12 chapter trophies + most collectibles) -- just choose
					your save file and start playing! :)"
				/>
				<meta
					name="keywords"
					content="the quarry, hackett, savegames, 2K"
				/>
				<meta name="author" content="Uday Khokhariya" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@yupuday" />
				<meta name="twitter:account_id" content="1460479438911537152" />
				<meta
					property="twitter:title"
					content="The Quarry Savegames -- Get your perfect ending today!"
				/>
				<meta
					property="twitter:description"
					content="The Quarry doesn't have any 'Save' option, so I played the 
					entire game + created saves for all the major decisions which lead to perfect ending 
					(everyone lives + 12 chapter trophies + most collectibles) -- just choose
					your save file and start playing! :)"
				/>
				<meta name="twitter:creator" content="@yupuday" />
				<meta
					property="twitter:image:src"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="w-full min-h-screen bg-black font-mono">
				<InvisibleNavbar />
				<div className="mt-5 w-full h-full flex flex-col items-center place-content-center p-3">
					<div className="w-full h-full">
						<img
							src="./assets/home.png"
							className="w-full h-full object-contain"
						/>
					</div>

					<img
						src="./assets/title.png"
						className="absolute w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-3 mt-[150px] sm:mt-[200px] drop-shadow-2xl"
					/>
				</div>

				<div
					className="p-3 flex flex-col items-center content-center text-center w-full text-white 
          drop-shadow-2xl text-md lg:text-2xl font-mono mt-[30px]"
				>
					<div className="mt-[40px] sm:mt-[10px] md:mt-[0px] max-w-xl lg:max-w-4xl leading-5 sm:leading-6 lg:leading-7">
						<b>Messed</b> up QTE / took a <i>wrong</i> decision?{" "}
						<b>TvT</b>
						<br />
						<br />
						<i>Fret{"'"} Not!</i> I created <b>savegames</b> for
						every important decision that follows the best ending (
						<b>everyone</b> lives + <b>12</b> chapter trophies +{" "}
						<b>most</b> collectibles)
						<br />
						<br />
						Just <i>pick</i> the decision where you messed up,&nbsp;
						<b>download</b>&nbsp;savegame and start <b>playing</b>{" "}
						:)
					</div>
					<div className="max-w-4xl italic text-red-600 mt-3 font-bold "></div>

					<Link
						target="_self"
						rel="noopener noreferrer"
						href={{
							pathname: "/savegames",
						}}
					>
						<motion.button
							whileTap={{
								scale: 0.9,
								transition: {
									duration: 0.03,
								},
							}}
							className="mt-4 flex flex-col items-center bg-isRedDarkEmphasis hover:bg-isRedDark
			text-isWhite py-1 px-4 text-lg md:text-xl lg:text-2xl rounded-xl font-black cursor-pointer
			transition duration-300 ease-in-out"
						>
							Click here to start!
						</motion.button>
					</Link>

					<div className="mt-[90px] flex flex-row items-center mb-3">
						created by&nbsp;
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href="https://twitter.com/yupuday"
						>
							<span
								className="bg-isBlueDarkEmphasis hover:bg-isBlueDark px-3 py-1 rounded-xl font-black
							transition duration-300 ease-in-out"
							>
								<b>@yupuday</b>
							</span>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
