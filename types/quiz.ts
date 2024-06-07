export enum Difficulty {
	Easy = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: Difficulty;
	incorrect_answers: Array<string>;
	question: string;
	type: string;
};

export type questionState = Array<Question & { answers: Array<string> }>;
