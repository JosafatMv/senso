import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Table } from '../components/answers/Table';

export const Survey = () => {
	const BASE_API = 'http://localhost:4000/api';
	const { key } = useParams();

	const [survey, setSurvey] = useState({});
	const [answers, setAnswers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getSurvey = async () => {
			try {
				const response = await fetch(`${BASE_API}/surveys/${key}`);
				const data = await response.json();
				const surveyInfo = data.survey;
				setSurvey(surveyInfo);
			} catch (error) {
				console.log(error);
			}
		};

		const getAnswers = async () => {
			try {
				const response = await fetch(`${BASE_API}/answers/${key}`);
				const data = await response.json();
				const answersInfo = data.answers;
				setAnswers(answersInfo);
			} catch (error) {
				console.log(error);
			}
		};

		getSurvey();
		getAnswers();
		setIsLoading(false);
	}, [key]);

	if (isLoading) {
		return <div>Cargando...</div>;
	}

	if (!survey.key) {
		return <div>No existe encuesta con esa key...</div>;
	}

	const areAnswers = () => {
		if (answers.length === 0) {
			return <div>No hay respuestas...</div>;
		}

		return <Table answers={answers} />;
	};

	return (
		<div className='container'>
			<h1 className='mt-5'>
				{survey.name}
				{survey.status === '1' ? (
					<span className='fs-6 text-success'> Activa</span>
				) : (
					<span className='fs-6 text-danger'> Finalizada</span>
				)}
			</h1>

			<div className='row'>
				<div className='col text-end'>
					<Link
						to={`/survey/${key}/register`}
						className='btn btn-primary'
					>
						Registrar
					</Link>
				</div>
			</div>
			<div className='table-responsive'>{areAnswers()}</div>
		</div>
	);
};
