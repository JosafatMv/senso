import { Link } from 'react-router-dom';

export const Survey = ({ surveyKey, name, status, i }) => {
	console.log(i);

	const isPair = () => {
		if (i % 2 === 0) {
			return `pairBackground`;
		}
		return 'oddBackgroud';
	};

	return (
		// <tr className='text-center'>
		// 	<th scope='row'>{index + 1}</th>
		// 	<td>
		// 		<Link to={`/survey/${surveyKey}`}>{name}</Link>
		// 	</td>
		// 	<td>
		// 		{status === '1' ? (
		// 			<span className='bg-success p-1 rounded text-white'>
		// 				Activa
		// 			</span>
		// 		) : (
		// 			<span className='bg-danger p-1 rounded text-white'>
		// 				Finalizada
		// 			</span>
		// 		)}
		// 	</td>
		// </tr>
		<div
			className={`col-12 d-flex justify-content-between py-4 align-items-center ${isPair()}  table-row`}
		>
			<p className='fw-bold text-start'>
				{surveyKey} - {name}
			</p>
			<div className='d-flex text-center survey-actions'>
				{status === '1' && (
					<Link to={`/survey/${surveyKey}/register`} className='me-4'>
						<i className='fa-regular fa-pen-to-square'></i>
						<p>Responder</p>
					</Link>
				)}

				<Link to={`/survey/${surveyKey}`}>
					<i className='fa-solid fa-chart-column'></i>
					<p>Resumen general</p>
				</Link>
			</div>
		</div>
	);
};
