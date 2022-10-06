import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnswerValues } from '../components/answers/AnswerValues';
import { Loader } from '../components/Loader';
import { setColorCircle } from '../helpers/setColorCircle';

export const Answer = () => {
	const BASE_API = 'http://localhost:4000/api';
	const { key, id } = useParams();

	const [answer, setAnswer] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getAnswer = async () => {
			try {
				const response = await fetch(
					`${BASE_API}/answers/${key}/${id}`
				);
				const data = await response.json();
				const answerInfo = data.answer;
				console.log(answerInfo);
				setAnswer(answerInfo);
			} catch (error) {
				console.log(error);
			}
		};

		getAnswer();
		setIsLoading(false);
	}, [id, key]);

	if (isLoading) {
		return <Loader />;
	}

	if (!answer.id_answer) {
		return <div>No existe respuesta con ese id...</div>;
	}

	return (
		<div className='container'>
			<nav aria-label='breadcrumb' className='my-4'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link to='/'>Encuestas</Link>
					</li>
					<li className='breadcrumb-item'>
						<Link to={`/survey/${key}`}>{key}</Link>
					</li>
					<li className='breadcrumb-item active' aria-current='page'>
						Respuesta
					</li>
				</ol>
			</nav>

			<div className='table-header mt-4 mb-5'>
				<h1 className='text-center fw-bold'>
					Sistema de Encuesta de Calidad de Software -{' '}
					{answer.survey_key}
					<p className='fs-4 text-active'>
						{answer.client} - {answer.school}
					</p>
				</h1>
			</div>

			<div className='row mb-5'>
				<div className='col-md-4'>
					<h3 className='text-center'>Resumen general</h3>
					<table className='table custom-table table-borderless'>
						<thead className='answer-headers'>
							<tr className='text-center bg-table-sup'>
								<th scope='col'>Características</th>
								<th scope='col'>Respuesta</th>
							</tr>
						</thead>
						<tbody>
							<AnswerValues answer={answer} />
						</tbody>
					</table>
				</div>

				<div className='col-md-8'>
					<h3 className='text-center'>Gráficas</h3>
					<table className='table custom-table table-borderless'>
						<thead className='answer-headers'>
							<tr className='text-center bg-table-sup'>
								<th scope='col'>Características</th>
								<th scope='col'>Respuesta</th>
							</tr>
						</thead>
						<tbody>
							<AnswerValues answer={answer} />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
