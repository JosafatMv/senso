import { Answer } from './Answer';

import '../../assets/css/TableAnswers.css';

export const Table = ({ answers }) => {
	return (
		<div className='table-wrapper-scroll-y my-custom-scrollbar'>
			<table className='table table-answers table-borderless'>
				<thead className='answer-headers sticky-top'>
					<tr className='text-center bg-table-sup'>
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
						<th scope='col'>%</th>
						<th scope='col'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{answers.map((answer, i) => (
						<Answer key={answer.id_answer} {...answer} index={i} />
					))}
				</tbody>
			</table>
		</div>
	);
};
