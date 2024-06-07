"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import { questionState } from "@/types/quiz";
import { useState } from "react";
import QuestionCard from "@/components/questionCard/QuestionCard";

type Props = {
	questions: questionState;
	totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
	const [currentsQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

	const isQuestionAnswered = userAnswers[currentsQuestionIndex] ? true : false;

	const router = useRouter();

	const handleOnAnswerClick = (
		answer: string,
		currentsQuestionIndex: number
	) => {
		//if question has already answered, do nothing
		if (isQuestionAnswered) return;
		//check answers with correct answers
		const isCorrect =
			questions[currentsQuestionIndex].correct_answer === answer;
		//if correct add score
		if (isCorrect) setScore((prev) => prev + 1);
		//save the answer in an object for user answers
		setUserAnswers((prev) => ({
			...prev,
			[currentsQuestionIndex]: answer,
		}));
	};

	const handleChangeQuestion = (step: number) => {
		const newQuestonIndex = currentsQuestionIndex + step;
		if (newQuestonIndex < 0 || newQuestonIndex >= totalQuestions) return;

		setCurrentQuestionIndex(newQuestonIndex);
	};
	return (
		<div className="text-white text-center">
			<p className="p-8 font-bold text-[20px]">Score: {score}</p>
			<p className="text-[9f50ac] font-bold pb-2 text-[14px]">
				Questin {currentsQuestionIndex + 1} out of {totalQuestions}
			</p>
			<QuestionCard
				currentQuestionIndex={currentsQuestionIndex}
				question={questions[currentsQuestionIndex].question}
				answers={questions[currentsQuestionIndex].answers}
				userAnswer={userAnswers[currentsQuestionIndex]}
				correctAnswer={questions[currentsQuestionIndex].correct_answer}
				onClick={handleOnAnswerClick}
			/>
			<div className="flex justify-around mt-16">
				<Button text="Prev" onClick={() => handleChangeQuestion(-1)} />
				<Button
					text={currentsQuestionIndex === totalQuestions - 1 ? "End" : "Next"}
					onClick={
						currentsQuestionIndex === totalQuestions - 1
							? () => router.push("/")
							: () => handleChangeQuestion(1)
					}
				/>
			</div>
		</div>
	);
};

export default Quiz;
