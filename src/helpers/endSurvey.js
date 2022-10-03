export const endSurvey = async (key) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/surveys/${key}`,
			{
				method: 'PUT',
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
