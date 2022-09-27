import React from 'react';
import { createRoot } from 'react-dom/client';
import SensoApp from './SensoApp';

import './assets/bootstrap/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SensoApp />);
