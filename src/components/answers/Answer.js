import { Link } from 'react-router-dom';
import { setColorCircle } from '../../helpers/setColorCircle';

export const Answer = ({
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
	total,
	survey_key,
	id_answer,
	index,
}) => {
	return (
		<tr className='text-center'>
			<th scope='row'>{index + 1}</th>
			<td>{client}</td>
			<td>{school}</td>
			<td>
				<div
					className={`circle ${setColorCircle(funcionalidad)}`}
				></div>
			</td>
			<td>
				<div
					className={`circle ${setColorCircle(confiabilidad)}`}
				></div>
			</td>
			<td>
				<div className={`circle ${setColorCircle(usabilidad)}`}></div>
			</td>
			<td>
				<div className={`circle ${setColorCircle(rendimiento)}`}></div>
			</td>
			<td>
				<div
					className={`circle ${setColorCircle(mantenimiento)}`}
				></div>
			</td>
			<td>
				<div className={`circle ${setColorCircle(portabilidad)}`}></div>
			</td>
			<td>
				<div className={`circle ${setColorCircle(seguridad)}`}></div>
			</td>
			<td>
				<div
					className={`circle ${setColorCircle(compatibilidad)}`}
				></div>
			</td>
			<td>{total}</td>
			<td>
				<Link
					to={`/answer/${survey_key}/${id_answer}`}
					className='text-danger'
				>
					<i className='fa-regular fa-eye'></i>
				</Link>
			</td>
		</tr>
	);
};
