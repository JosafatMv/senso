import React from 'react';

export const AnswerInput = ({
	id,
	inputName,
	handleOnChange,
	value,
	className,
	inputValue,
}) => {
	return (
		<td>
			<input
				type='radio'
				className='btn-check'
				name={inputName}
				id={id}
				checked={inputValue === value ? true : false}
				onChange={handleOnChange}
				value={value}
				required
			/>
			<label className={`btn ${className}`} htmlFor={id}></label>
		</td>
	);
};
