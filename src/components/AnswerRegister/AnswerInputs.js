import React from 'react';
import { AnswerInput } from './AnswerInput';

export const AnswerInputs = ({ title, handleOnChange, inputValue }) => {
	const idInputs = [
		{
			id: `${title}_mala`,
			className: 'btn-outline-danger',
			value: '1',
		},
		{
			id: `${title}_regular`,
			className: 'btn-outline-info',
			value: '2',
		},
		{
			id: `${title}_buena`,
			className: 'btn-outline-warning',
			value: '3',
		},
		{
			id: `${title}_muy_buena`,
			className: 'btn-outline-success',
			value: '4',
		},
		{
			id: `${title}_excelente`,
			className: 'btn-outline-primary',
			value: '5',
		},
	];

	const setTitleLowerCase = () => {
		return title.toLowerCase();
	};

	return (
		<tr>
			<td className='fw-bold'>{title}</td>
			{idInputs.map((idInput, i) => (
				<AnswerInput
					id={idInput.id}
					inputName={setTitleLowerCase()}
					handleOnChange={handleOnChange}
					value={idInput.value}
					className={idInput.className}
					inputValue={inputValue}
					key={idInput.id}
				/>
			))}
		</tr>
	);
};
