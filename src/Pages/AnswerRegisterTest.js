import { useNavigate, useParams } from 'react-router-dom';
import { getTotal } from '../helpers/getTotal';
import { registerAnswer } from '../helpers/registerAnswer';
import { useForm } from '../hooks/useForm';

export const AnswerRegister = () => {
	const { key } = useParams();
	const navigate = useNavigate();

	const [answerValues, setAnswerValues] = useForm({
		client: 'Josa',
		school: 'utez',
		funcionalidad: 2,
		confiabilidad: 2,
		usabilidad: 2,
		rendimiento: 2,
		mantenimiento: 2,
		portabilidad: 2,
		seguridad: 2,
		compatibilidad: 2,
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

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const total = getTotal(answerValues);
		answerValues.total = total;
		const data = await registerAnswer(answerValues, key);

		if (data.ok) {
			navigate(`/survey/${key}`);
		}
	};

	return (
		<div className='container'>
			<form onSubmit={handleOnSubmit}>
				<div className='mb-3'>
					<label htmlFor='client' className='form-label'>
						Cliente:
					</label>
					<input
						type='text'
						className='form-control'
						id='client'
						name='client'
						value={client}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='school' className='form-label'>
						Escuela:
					</label>
					<input
						type='text'
						className='form-control'
						id='school'
						name='school'
						value={school}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='funcionalidad' className='form-label'>
						Funcionalidad:
					</label>
					<input
						type='number'
						className='form-control'
						id='funcionalidad'
						name='funcionalidad'
						value={funcionalidad}
						onChange={setAnswerValues}
						min='0'
						max='5'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='confiabilidad' className='form-label'>
						confiabilidad:
					</label>
					<input
						type='number'
						className='form-control'
						id='confiabilidad'
						name='confiabilidad'
						value={confiabilidad}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='usabilidad' className='form-label'>
						usabilidad:
					</label>
					<input
						type='number'
						className='form-control'
						id='usabilidad'
						name='usabilidad'
						value={usabilidad}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='rendimiento' className='form-label'>
						rendimiento:
					</label>
					<input
						type='number'
						className='form-control'
						id='rendimiento'
						name='rendimiento'
						value={rendimiento}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='mantenimiento' className='form-label'>
						mantenimiento:
					</label>
					<input
						type='number'
						className='form-control'
						id='mantenimiento'
						name='mantenimiento'
						value={mantenimiento}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='portabilidad' className='form-label'>
						portabilidad:
					</label>
					<input
						type='number'
						className='form-control'
						id='portabilidad'
						name='portabilidad'
						value={portabilidad}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='seguridad' className='form-label'>
						seguridad:
					</label>
					<input
						type='number'
						className='form-control'
						id='seguridad'
						name='seguridad'
						value={seguridad}
						onChange={setAnswerValues}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='compatibilidad' className='form-label'>
						compatibilidad:
					</label>
					<input
						type='number'
						className='form-control'
						id='compatibilidad'
						name='compatibilidad'
						value={compatibilidad}
						onChange={setAnswerValues}
					/>
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};
