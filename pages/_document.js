import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
					rel="stylesheet"
				/>
				<title>The Quarry Savegames</title>
				<meta
					name="description"
					content="Let's end the curse of the Hag of Hackett's Quarry together."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<meta itemprop="name" content="The Quarry Savegames " />
				<meta
					itemprop="description"
					content="Let's end the curse of the Hag of Hackett's Quarry together."
				/>
				<meta
					itemprop="image"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="The Quarry Savegames" />
				<meta
					name="twitter:description"
					content="Let's end the curse of the Hag of Hackett's Quarry together."
				/>
				<meta
					name="twitter:image"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>

				<meta property="og:url" content="https://quarry.vercel.app" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="The Quarry Savegames" />
				<meta
					property="og:description"
					content="Let's end the curse of the Hag of Hackett's Quarry together."
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@yupuday" />
				<meta name="twitter:account_id" content="1460479438911537152" />
				<meta property="twitter:title" content="The Quarry Savegames" />
				<meta
					property="twitter:description"
					content="Let's end the curse of the Hag of Hackett's Quarry together."
				/>
				<meta name="twitter:creator" content="@yupuday" />
				<meta
					property="twitter:image:src"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>
				<meta property="og:url" content="https://quarry.vercel.app/" />
				<meta property="og:title" content="The Quarry Savegames" />
				<meta
					property="og:description"
					content="Let's end the curse of the Hag of Hackett's Quarry together."
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/githubotoro/quarry/main/public/assets/splash.png"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
