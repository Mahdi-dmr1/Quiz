import { getBgColor } from "./helpers";

type Props = {
	currentQuestionIndex: number;
	question: string;
	answers: Array<string>;
	userAnswer: string | undefined;
	correctAnswer: string;
	onClick: (answer: string, currentsQuestionIndex: number) => void;
};

const QuestionCard = ({
	currentQuestionIndex,
	question,
	answers,
	userAnswer,
	correctAnswer,
	onClick,
}: Props) => (
	<div>
		<p
			className="text-[20px] max-w-[400px]"
			dangerouslySetInnerHTML={{ __html: question }}
		/>
		<div className="flex flex-col items-center pt-8">
			{answers.map((answer) => (
				<div
					key={answer}
					className={`${getBgColor(
						userAnswer,
						correctAnswer,
						answer
					)} cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400px] my-2 w-full rounded-[10px]`}
					onClick={() => onClick(answer, currentQuestionIndex)}>
					<span
						className="truncate"
						dangerouslySetInnerHTML={{ __html: answer }}></span>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
