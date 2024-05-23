"use client";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import {Unfailed} from "../components/unfailed"
import {Botai} from "../components/botai"
import {Empty} from "../components/empty"

const socials = [
	{
		icon: <Unfailed/>,
		href: "/",
		label: "NFT minter dApp | ethereum",
		handle: "unfailed.yxz",
	},
	{
		icon: <Botai  />,
		href: "/",
		label: "AI assistant | GPT4 API",
		handle: "business bot",
	},
	{
		icon: <Empty  />,
		href: "/",
		label: "empty",
		handle: "empty",
	},
];

export default function Projects() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								
								<span className="flex flex-col items-center text-center items-center">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="titlepr lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
