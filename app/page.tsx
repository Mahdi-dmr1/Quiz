"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";

const Home = () => {
	const router = useRouter();

	const handleButtonClick = () => router.push("/quiz");

	return (
		<div className="text-center">
			<p className=" text-white p-4">
				Do you have what it takes to answer every question?
			</p>

			<Button text="Start-Quiz" onClick={handleButtonClick}></Button>
		</div>
	);
};

export default Home;
