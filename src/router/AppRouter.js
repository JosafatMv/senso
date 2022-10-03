import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Answer } from '../Pages/Answer';
import { AnswerRegister } from '../Pages/AnswerRegister';
import { Home } from '../Pages/Home';
import { Survey } from '../Pages/Survey';

export const AppRouter = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className='main-layout'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/survey/:key' element={<Survey />} />
						<Route
							path='/survey/:key/register'
							element={<AnswerRegister />}
						/>
						<Route path='/answer/:key/:id' element={<Answer />} />

						<Route
							path='/*'
							element={<Navigate to='/' replace />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
