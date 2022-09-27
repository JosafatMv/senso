import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
		return <div>Cargando...</div>;
	}

	if (!answer.id_answer) {
		return <div>No existe respuesta con ese id...</div>;
	}

	return (
		<div className='container'>
			<h1 className='mt-5'>
				{answer.client} - {answer.school}
			</h1>
			<div className='d-flex flex-column'>
				<div>
					<span className='fw-bold'>Funcionalidad: </span>{' '}
					{answer.funcionalidad}
				</div>
				<div>
					<span className='fw-bold'>confiabilidad: </span>{' '}
					{answer.confiabilidad}
				</div>
				<div>
					<span className='fw-bold'>usabilidad: </span>{' '}
					{answer.usabilidad}
				</div>
				<div>
					<span className='fw-bold'>rendimiento: </span>{' '}
					{answer.rendimiento}
				</div>
				<div>
					<span className='fw-bold'>mantenimiento: </span>{' '}
					{answer.mantenimiento}
				</div>
				<div>
					<span className='fw-bold'>portabilidad: </span>{' '}
					{answer.portabilidad}
				</div>
				<div>
					<span className='fw-bold'>seguridad: </span>{' '}
					{answer.seguridad}
				</div>
				<div>
					<span className='fw-bold'>compatibilidad: </span>{' '}
					{answer.compatibilidad}
				</div>
				<div>
					<span className='fw-bold'>total: </span> {answer.total}
				</div>
			</div>
		</div>
	);
};
