import React from 'react';
import { Survey } from './Survey';

export const Table = ({ surveys }) => {
	console.log(surveys);

	return (
		<table className='table'>
			<thead>
				<tr className='text-center'>
					<th scope='col'>#</th>
					<th scope='col'>Nombre</th>
					<th scope='col'>Estatus</th>
				</tr>
			</thead>
			<tbody>
				{surveys.map((survey, i) => (
					<Survey
						key={survey.key}
						{...survey}
						surveyKey={survey.key}
						index={i}
					/>
				))}
			</tbody>
		</table>
	);
};
