export const getOverallPercentage = (answers) => {
	const overallPercentage = answers.reduce(
		(total, answer) => total + answer.total,
		0
	);

	return overallPercentage / answers.length;
};
