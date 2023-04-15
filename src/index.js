import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';



// Utiliza createRoot para inicializar la renderización de tu aplicación
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
 
);


