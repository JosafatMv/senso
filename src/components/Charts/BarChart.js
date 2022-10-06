import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const BarChart = ({ answers }) => {
	const [values, setValues] = useState({});

	useEffect(() => {
		const overallFuncionalidad = answers.reduce(
			(total, answer) => total + answer.funcionalidad,
			0
		);
		const overallConfiabilidad = answers.reduce(
			(total, answer) => total + answer.confiabilidad,
			0
		);
		const overallUsabilidad = answers.reduce(
			(total, answer) => total + answer.usabilidad,
			0
		);
		const overallRendimiento = answers.reduce(
			(total, answer) => total + answer.rendimiento,
			0
		);
		const overallMantenimiento = answers.reduce(
			(total, answer) => total + answer.mantenimiento,
			0
		);
		const overallPortabilidad = answers.reduce(
			(total, answer) => total + answer.portabilidad,
			0
		);
		const overallSeguridad = answers.reduce(
			(total, answer) => total + answer.seguridad,
			0
		);
		const overallCompatibilidad = answers.reduce(
			(total, answer) => total + answer.compatibilidad,
			0
		);

		const values = {
			funcionalidad: overallFuncionalidad,
			confiabilidad: overallConfiabilidad,
			usabilidad: overallUsabilidad,
			rendimiento: overallRendimiento,
			mantenimiento: overallMantenimiento,
			portabilidad: overallPortabilidad,
			seguridad: overallSeguridad,
			compatibilidad: overallCompatibilidad,
		};
		setValues(values);
	}, [answers]);

	const labels = [
		'Funcionalidad',
		'Confiabilidad',
		'Usabilidad',
		'Rendimiento',
		'Mantenimiento',
		'Portabilidad',
		'Seguridad',
		'Compatibilidad',
	];

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: [
					values.funcionalidad,
					values.confiabilidad,
					values.usabilidad,
					values.rendimiento,
					values.mantenimiento,
					values.portabilidad,
					values.seguridad,
					values.compatibilidad,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div>
			<Bar
				data={data}
				options={{
					maintainAspectRatio: false,
					scales: {
						y: {
							beginAtZero: true,
						},
					},
					legend: {
						labels: {
							fontSize: 25,
						},
					},
				}}
			/>
		</div>
	);
};
