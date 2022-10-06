import { useEffect, useState } from 'react';
import {
	Link,
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import { Table } from '../components/answers/Table';
import { Loader } from '../components/Loader';
import { endSurvey } from '../helpers/endSurvey';
import { getOverallPercentage } from '../helpers/getOverallPercentage';

import '../assets/css/Survey.css';
import { BarChart } from '../components/Charts/BarChart';

export const Survey = () => {
	const BASE_API = 'http://localhost:4000/api';
	const { key } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const [survey, setSurvey] = useState({});
	const [answers, setAnswers] = useState([]);
	const [overallPercentage, setOverallPercentage] = useState(0);
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
				if (answers.length !== 0) {
					const overall = getOverallPercentage(answersInfo);
					setOverallPercentage(overall);
				}
				setAnswers(answersInfo);
			} catch (error) {
				console.log(error);
			}
		};

		getSurvey();
		getAnswers();

		setIsLoading(false);
	}, [answers.length, key, location.search]);

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
				console.log(data);
				console.log(data.ok);
				if (data.ok) {
					navigate(`/survey/${key}?finish=true`);
				}
			}
		});
	};

	return (
		<div className='container'>
			<nav aria-label='breadcrumb' className='my-4'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link to='/'>Encuestas</Link>
					</li>

					<li className='breadcrumb-item active' aria-current='page'>
						{key}
					</li>
				</ol>
			</nav>

			<div className='table-header mt-4 mb-5'>
				<h1 className='text-center fw-bold'>
					Sistema de Encuesta de Calidad de Software - {survey.name}
					{survey.status === '1' ? (
						<p className='fs-4 text-active'>Encuesta activa</p>
					) : (
						<p className='fs-4 text-finish'>Encuesta finalizada</p>
					)}
				</h1>
			</div>

			<div className='row mb-5'>
				<div className='col-md-4'>
					<h3 className='text-center'>Resumen general</h3>
					<table className='table custom-table table-borderless'>
						<thead className='answer-headers'>
							<tr className='text-center bg-table-sup'>
								<th scope='col'>Encuestas registradas</th>
								<th scope='col'>Porcentaje de calidad</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							<tr>
								<td>{answers.length}</td>
								<td>{overallPercentage}%</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='col-md-8'>
					<h3 className='text-center'>Simbologia</h3>
					<table className='table custom-table table-borderless'>
						<thead className='answer-headers'>
							<tr className='text-center bg-table-sup'>
								<th scope='col'>Mala</th>
								<th scope='col'>Regular</th>
								<th scope='col'>Buena</th>
								<th scope='col'>Muy buena</th>
								<th scope='col'>Excelente</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className='circle circle-red'></div>
								</td>
								<td>
									<div className='circle circle-orange'></div>
								</td>
								<td>
									<div className='circle circle-yellow'></div>
								</td>
								<td>
									<div className='circle circle-green'></div>
								</td>
								<td>
									<div className='circle circle-blue'></div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className='table-header mb-3'>
				{/* <h1 className='text-center'>
					{survey.name}
					{survey.status === '1' ? (
						<span className='fs-6 text-success'> Activa</span>
					) : (
						<span className='fs-6 text-danger'> Finalizada</span>
					)}
				</h1> */}
				<h2 className='text-center'>Listado de respuestas</h2>
			</div>

			<div className='table-responsive'>{areAnswers()}</div>

			<div className='survey-buttons my-3'>
				{survey.status === '1' && (
					<div className='survey-buttons text-end'>
						<Link
							to={`/survey/${key}/register`}
							className='btn btn-primary me-3'
							disabled={isLoading}
						>
							Registrar respuesta
						</Link>

						<button
							to={`/survey/${key}/register`}
							className='btn btn-danger'
							onClick={handleOnFinish}
							disabled={isLoading}
						>
							Finalizar encuesta
						</button>
					</div>
				)}
			</div>

			<div className='charts my-5'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<BarChart answers={answers} />
					</div>
					<div className='col-12 col-md-6'>
						<BarChart answers={answers} />
					</div>
				</div>
			</div>
		</div>
	);
};
