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
		<div
			className={`col-12 d-flex justify-content-between py-4 align-items-center ${isPair()} table-row`}
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
