import React from 'react';
import { Survey } from './Survey';

export const Surveys = ({ surveys }) => {
	return (
		<div className='row table-surveys'>
			<div className='header py-3 redond'></div>
			{surveys.map((survey, i) => (
				<Survey
					key={survey.key}
					surveyKey={survey.key}
					name={survey.name}
					status={survey.status}
					i={i}
				/>
			))}
		</div>
	);
};
