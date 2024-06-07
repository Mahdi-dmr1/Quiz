import { shuffleArray } from "@/utils/arrayUtils";

import Quiz from "./Quiz";

import { Difficulty, questionState, Question } from "@/types/quiz";

const TOTAL_QUESTIONS = 10;

const getQuestions = async (
	amount: number,
	difficulty: Difficulty
): Promise<questionState> => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

	const data: { results: Array<Question> } = await (
		await fetch(endpoint, { cache: "no-store" })
	).json();

	return data.results.map((question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};

const Home = async () => {
	const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.Easy);

	return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default Home;
