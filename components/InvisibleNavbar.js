import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InvisibleNavbar = () => {
	const router = useRouter();

	return (
		<>
			<div className=" flex flex-col items-center w-full place-content-center">
				<div
					className="flex flex-row items-center justify-between w-full max-w-6xl px-3 py-2 bg-opacity-10 rounded-xl
                 bg-transparent "
				>
					<motion.svg
						whileTap={{
							scale: 0.9,
							transition: { duration: 0.03 },
						}}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className={`w-9 h-9 transition duration-300 ease-in-out cursor-pointer
                            outline-none focus:outline-none
                           fill-transparent
                        `}
					>
						<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
						<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
					</motion.svg>

					<motion.svg
						whileTap={{
							scale: 0.9,
							transition: { duration: 0.03 },
						}}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className={`w-9 h-9 transition duration-300 ease-in-out cursor-pointer outline-none focus:outline-none
						fill-transparent
                        `}
					>
						<path d="M15 6.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H15zM20.25 6.75a.75.75 0 00-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75zM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" />
					</motion.svg>

					<motion.svg
						whileTap={{
							scale: 0.9,
							transition: { duration: 0.03 },
						}}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className={`w-9 h-9 transition duration-300 ease-in-out cursor-pointer
                            outline-none focus:outline-none
							fill-transparent
                            
                        `}
					>
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</motion.svg>
				</div>
			</div>
		</>
	);
};
