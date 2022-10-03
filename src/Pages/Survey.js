import { useEffect, useState } from 'react';
import {
	Link,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Table } from '../components/answers/Table';
import { Loader } from '../components/Loader';
import { endSurvey } from '../helpers/endSurvey';

export const Survey = () => {
	const BASE_API = 'http://localhost:4000/api';
	const { key } = useParams();
	const navigate = useNavigate();

	const [survey, setSurvey] = useState({});
	const [answers, setAnswers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	let [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (searchParams.get('register')) {
			toast.success('Respuesta registrada con exito!', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		if (searchParams.get('finish')) {
			toast.success('Encuesta finalizada con exito!', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}, [searchParams]);

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
		return <Loader />;
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

	const handleOnFinish = async () => {
		return Swal.fire({
			title: '¿Seguro que deseas acabar esta encuesta?',
			text: 'No podrás activarla nuevamente',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Finalizar',
			cancelButtonText: 'Cancelar',
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsLoading(true);
				const data = await endSurvey(key);
				setIsLoading(false);
				if (data.ok) {
					navigate(`/survey/${key}`);
				}
			}
		});
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

			{survey.status === '1' && (
				<div className='row'>
					<div className='col text-end'>
						<button
							to={`/survey/${key}/register`}
							className='btn btn-primary me-3'
							onClick={handleOnFinish}
							disabled={isLoading}
						>
							Finalizar
						</button>

						<Link
							to={`/survey/${key}/register`}
							className='btn btn-primary'
							disabled={isLoading}
						>
							Registrar
						</Link>
					</div>
				</div>
			)}

			<div className='table-responsive'>{areAnswers()}</div>
		</div>
	);
};
