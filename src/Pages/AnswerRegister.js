import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import '../assets/css/index.css';
import { AnswerInputs } from '../components/AnswerRegister/AnswerInputs';
import { Loader } from '../components/Loader';
import { getTotal } from '../helpers/getTotal';
import { registerAnswer } from '../helpers/registerAnswer';
import { useForm } from '../hooks/useForm';

export const AnswerRegister = () => {
	const { key } = useParams();
	const navigate = useNavigate();

	const [total, setTotal] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const [answerValues, setAnswerValues] = useForm({
		client: '',
		school: '',
		funcionalidad: 0,
		confiabilidad: 0,
		usabilidad: 0,
		rendimiento: 0,
		mantenimiento: 0,
		portabilidad: 0,
		seguridad: 0,
		compatibilidad: 0,
	});

	const {
		client,
		school,
		funcionalidad,
		confiabilidad,
		usabilidad,
		rendimiento,
		mantenimiento,
		portabilidad,
		seguridad,
		compatibilidad,
	} = answerValues;

	useEffect(() => {
		const total = getTotal(answerValues);
		setTotal(total);
	}, [answerValues]);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		return Swal.fire({
			title: '¿Seguro que deseas registrar esta respuesta?',
			text: 'No podrás modificarla',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Registrar',
			cancelButtonText: 'Cancelar',
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsLoading(true);
				const total = getTotal(answerValues);
				answerValues.total = total;
				const data = await registerAnswer(answerValues, key);
				setIsLoading(false);

				if (data.ok) {
					navigate(`/survey/${key}?register=true`);
				}
			}
		});
	};

	const handleOnCancel = async () => {
		return Swal.fire({
			title: '¿Seguro que deseas cancelar el registro?',
			text: 'No podrás recuperar el registro',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar',
		}).then(async (result) => {
			if (result.isConfirmed) {
				navigate(`/survey/${key}?finish=true`);
			}
		});
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='container mt-5'>
			<nav aria-label='breadcrumb' className='my-4'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link to='/'>Encuestas</Link>
					</li>
					<li className='breadcrumb-item'>
						<Link to={`/survey/${key}`}>{key}</Link>
					</li>
					<li className='breadcrumb-item active' aria-current='page'>
						Registro de respuesta
					</li>
				</ol>
			</nav>

			<form onSubmit={handleOnSubmit}>
				<div className='row g-3 align-items-center mb-3'>
					<div className='col-1 text-end'>
						<label htmlFor='client' className='form-label'>
							Nombre:
						</label>
					</div>
					<div className='col-3'>
						<input
							type='text'
							className='form-control'
							id='client'
							name='client'
							value={client}
							onChange={setAnswerValues}
							required
						/>
					</div>

					<div className='col-1 text-end'>
						<label htmlFor='school' className='form-label'>
							Institución:
						</label>
					</div>
					<div className='col-3'>
						<input
							type='text'
							className='form-control'
							id='school'
							name='school'
							value={school}
							onChange={setAnswerValues}
							required
						/>
					</div>
				</div>

				<h2 className='text-center mt-5 fw-bold'>
					Encuesta de calidad de software - {key}
				</h2>

				<table className='table answer-table'>
					<thead className='text-center redond'>
						<tr className='bg-table-sup'>
							<th>Características</th>
							<th>Mala</th>
							<th>Regular</th>
							<th>Buena</th>
							<th>Muy buena</th>
							<th>Excelente</th>
						</tr>
					</thead>
					<tbody className='text-center encuesta'>
						<AnswerInputs
							title='Funcionalidad'
							handleOnChange={setAnswerValues}
							inputValue={funcionalidad}
						/>
						<AnswerInputs
							title='Compatibilidad'
							handleOnChange={setAnswerValues}
							inputValue={compatibilidad}
						/>
						<AnswerInputs
							title='Mantenimiento'
							handleOnChange={setAnswerValues}
							inputValue={mantenimiento}
						/>
						<AnswerInputs
							title='Confiabilidad'
							handleOnChange={setAnswerValues}
							inputValue={confiabilidad}
						/>
						<AnswerInputs
							title='Rendimiento'
							handleOnChange={setAnswerValues}
							inputValue={rendimiento}
						/>
						<AnswerInputs
							title='Portabilidad'
							handleOnChange={setAnswerValues}
							inputValue={portabilidad}
						/>
						<AnswerInputs
							title='Usabilidad'
							handleOnChange={setAnswerValues}
							inputValue={usabilidad}
						/>
						<AnswerInputs
							title='Seguridad'
							handleOnChange={setAnswerValues}
							inputValue={seguridad}
						/>
					</tbody>
				</table>

				<div className='row my-4'>
					<div className='col'>
						<h3>Porcentaje: {total}%</h3>
					</div>
					<div className='col d-flex justify-content-end'>
						<button
							onClick={handleOnCancel}
							className='btn btn-danger me-3'
							type='button'
						>
							Cancelar <i className='fa-solid fa-xmark'></i>
						</button>

						<button className='btn btn-primary' type='submit'>
							Registrar{' '}
							<i className='fa-regular fa-circle-check'></i>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
