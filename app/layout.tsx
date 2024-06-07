import Image from "next/image";
import { Quicksand } from "next/font/google";

import type { Metadata } from "next";

import logo from "../assets/react-quiz-logo.svg";

import "./globals.css";

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-[#2b2737] p-4">
				<main
					className={`${quicksand.variable} font-quicksand max-w-[900] m-auto flex flex-col items-center `}>
					<Image className="h-[80px] sm:h-full" src={logo} alt="logo" />
					{children}
				</main>
			</body>
		</html>
	);
}
