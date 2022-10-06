import React from 'react';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { setColorCircle } from '../../helpers/setColorCircle';

export const AnswerValues = ({ answer }) => {
	const {
		funcionalidad,
		confiabilidad,
		usabilidad,
		rendimiento,
		mantenimiento,
		portabilidad,
		seguridad,
		compatibilidad,
	} = answer;
	const answerValues = {
		funcionalidad,
		confiabilidad,
		usabilidad,
		rendimiento,
		mantenimiento,
		portabilidad,
		seguridad,
		compatibilidad,
	};

	return (
		<>
			{Object.entries(answerValues).map((entry) => {
				const [key, value] = entry;
				console.log(entry);
				return (
					<tr>
						<td className='fw-bold'>
							{capitalizeFirstLetter(key)}
						</td>
						<td>
							<div
								className={`answer-pill ${setColorCircle(
									value
								)}`}
							></div>
						</td>
					</tr>
				);
			})}
			<tr>
				<td className='fw-bold'>Total</td>
				<td>{answer.total}</td>
			</tr>
		</>
	);
};
