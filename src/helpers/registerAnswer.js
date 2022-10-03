export const registerAnswer = async (answer, key) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/answers/${key}`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(answer),
			}
		);
		const data = await response.json();
        return data;

	} catch (error) {
		console.log(error);
	}
};
