import { useEffect, useState } from 'react';
import { Table } from '../components/surveys/Table';

export const Home = () => {
	const BASE_API = 'http://localhost:4000/api';

	const [surveys, setSurveys] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getSurveys = async () => {
			try {
				const response = await fetch(`${BASE_API}/surveys`);
				const data = await response.json();
				const surveysInfo = data.surveys;
				setSurveys(surveysInfo);
			} catch (error) {
				console.log(error);
			}
		};
		getSurveys();
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <div>Cargando...</div>;
	}

	if (surveys.length === 0) {
		return <div>No hay encuestas...</div>;
	}

	return (
		<div className='container mt-5'>
			<h1>Encuestas</h1>

			<div className='table-responsive'>
				{surveys && <Table surveys={surveys} />}
			</div>
		</div>
	);
};
