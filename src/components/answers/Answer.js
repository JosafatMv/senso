import { Link } from 'react-router-dom';

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
	status,
	survey_key,
	id_answer,
	index,
}) => {
	return (
		<tr className='text-center'>
			<th scope='row'>{index + 1}</th>
			<td>
				<Link to={`/answer/${survey_key}/${id_answer}`}>{client}</Link>
			</td>
			<td>{school}</td>
			<td>{funcionalidad}</td>
			<td>{confiabilidad}</td>
			<td>{usabilidad}</td>
			<td>{rendimiento}</td>
			<td>{mantenimiento}</td>
			<td>{portabilidad}</td>
			<td>{seguridad}</td>
			<td>{compatibilidad}</td>
			<td>{total}</td>
			<td>{status}</td>
		</tr>
	);
};
