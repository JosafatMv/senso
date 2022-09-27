import { Answer } from './Answer';

export const Table = ({ answers }) => {
	console.log(answers);

	return (
		<table className='table'>
			<thead>
				<tr className='text-center'>
					<th scope='col'>#</th>
					<th scope='col'>Cliente</th>
					<th scope='col'>Escuela</th>
					<th scope='col'>Funcionalidad</th>
					<th scope='col'>Confiabilidad</th>
					<th scope='col'>Usabilidad</th>
					<th scope='col'>Rendimiento</th>
					<th scope='col'>Mantenimiento</th>
					<th scope='col'>Portabilidad</th>
					<th scope='col'>Seguridad</th>
					<th scope='col'>Compatibilidad</th>
					<th scope='col'>Total</th>
				</tr>
			</thead>
			<tbody>
				{answers.map((answer, i) => (
					<Answer key={answer.id_answer} {...answer} index={i} />
				))}
			</tbody>
		</table>
	);
};
