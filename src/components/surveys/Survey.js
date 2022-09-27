import { Link } from 'react-router-dom';

export const Survey = ({ surveyKey, name, status, index }) => {
	return (
		<tr className='text-center'>
			<th scope='row'>{index + 1}</th>
			<td>
				<Link to={`/survey/${surveyKey}`}>{name}</Link>
			</td>
			<td>
				{status === '1' ? (
					<span className='bg-success p-1 rounded text-white'>
						Activa
					</span>
				) : (
					<span className='bg-danger p-1 rounded text-white'>
						Finalizada
					</span>
				)}
			</td>
		</tr>
	);
};
