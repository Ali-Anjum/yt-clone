import REACT from 'react';
import REACTDOM from 'react-dom/client';

import App from  './App';
import './index.css';


const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<App/>);