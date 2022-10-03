import { AppRouter } from './router/AppRouter';
import './assets/css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const SensoApp = () => {
	return (
		<>
			<AppRouter />
			<ToastContainer />
		</>
	);
};

export default SensoApp;
