import { Saves } from "@/data/saves";
import { Downloads } from "@/data/downloads";
import { useState } from "react";
import { InvisibleNavbar } from "@/components/InvisibleNavbar";

const Savegames = () => {
	const saveLocation = `C:\\Users\\<YOUR_PC_NAME>\\AppData\\Local\\TheQuarry\\Saved\\SaveGames`;
	const [currChap, setCurrChap] = useState("chap0");
	const [infoOpen, setInfoOpen] = useState(false);

	return (
		<>
			<div
				className="font-mono flex flex-col items-center place-content-start w-full min-h-screen
                 bg-isBlack text-isGrayLight5 p-3"
			>
				<InvisibleNavbar />
				<div className="w-full max-w-6xl flex flex-col items-center place-content-start min-h-screen">
					<div className="flex flex-row pb-2 items-center place-content-center mt-8">
						<div className="flex flex-col items-center text-lg md:text-2xl lg:text-3xl font-black ">
							Select Chapter
						</div>
						<div className="flex flex-col items-center ml-3 bg-transparent rounded-full">
							<svg
								onClick={() => {
									setInfoOpen(!infoOpen);
								}}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-6 h-6 md:w-8 md:h-8 stroke-isGrayLight5 stroke-2 fill-isBlueDarkEmphasis
								hover:fill-isBlueDark transition duration-300 ease-in-out cursor-pointer"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</div>
					</div>

					<div className="w-full flex flex-row space-x-1 md:space-x-2 items-center place-content-center">
						{Object.keys(Saves).map((chap, chapIndex) => {
							return (
								<div
									onClick={() => {
										setCurrChap(`chap${chapIndex}`);
									}}
									className={`p-1 w-9 flex flex-col items-center rounded-lg font-black
									transition duration-300 ease-in-out cursor-pointer 
									text-sm md:text-md lg:text-lg
									
									${
										currChap === `chap${chapIndex}`
											? "bg-isRedDarkEmphasis hover:bg-isRedDark"
											: "bg-isGrayLight5 text-isGrayLight hover:bg-isBlueDarkEmphasis hover:text-isWhite"
									}
									`}
									key={chapIndex}
								>
									{chapIndex}
								</div>
							);
						})}
					</div>

					<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-5">
						{Saves[currChap].map((save, saveIndex) => {
							return (
								<div
									className="relative flex flex-col items-center group"
									key={saveIndex}
								>
									<img
										src={save.image}
										alt={`Save-${saveIndex} image`}
										className="object-cover object-center rounded-3xl shadow-sm
										w-full h-28 lg:h-48"
									/>
									<div
										className="absolute group-hover:text-transparent group-hover:bg-transparent bottom-0 w-full flex flex-col items-center
										 p-1 backdrop-blur-sm bg-isWhite rounded-b-3xl bg-opacity-[11%] text-sm md:text-md lg:text-lg
										"
									>
										{save.action}
									</div>

									<div
										className="transition duration-300 ease-in-out
										 bg-transparent group-hover:bg-isWhite absolute w-full h-full
									rounded-3xl group-hover:backdrop-blur-sm group-hover:bg-opacity-10
									"
									>
										<div className="w-full h-full flex flex-col items-center place-content-center">
											<a
												href={`https://drive.google.com/uc?export=download&id=${
													Downloads[save.saveid]
												}`}
												download="SaveGame0"
												className="w-12 h-12 flex flex-col items-center place-content-center
												bg-transparent group-hover:bg-isGreenDarkEmphasis											
											 group-hover:hover:bg-isGreenDark cursor-pointer rounded-xl
											transition duration-300 ease-in-out
											
											"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													className="transition duration-300 ease-in-out w-full h-full p-2 fill-transparent group-hover:fill-isWhite"
												>
													<path
														fillRule="evenodd"
														d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div
					onClick={() => {
						setInfoOpen(!infoOpen);
					}}
					className={`${
						infoOpen ? "flex" : "hidden"
					} flex-col items-center absolute w-full h-full p-3 place-content-center backdrop-blur-sm `}
				>
					<div className="flex flex-col items-center w-full max-w-6xl">
						<div className="bg-isRedDarkEmphasis rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl w-full flex flex-col items-center text-lg md:text-2xl lg:text-3xl font-black md:py-1">
							How it works?
						</div>
						<ol className="break-words w-full list-decimal bg-isGrayLight5 text-isBlack font-black md:py-1 text-sm md:text-md lg:text-lg">
							<li className="ml-11 pr-5">Download Savegame.</li>
							<li className="ml-11 break-words pr-5">
								Paste it @ {saveLocation}
							</li>
							<li className="ml-11 break-words pr-5">
								Start Playing :)
							</li>
						</ol>
						<div
							className="bg-isBlueDarkEmphasis rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl w-full flex flex-col items-center 
						text-sm md:text-md lg:text-lg font-black py-1 px-2"
						>
							p.s., just exit to main menu, paste the save and
							resume -- no need to exit the game completely.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Savegames;
