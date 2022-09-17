import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './components/GlobalStyle/index';

import { TodosProvider } from './context/TodosContext'
import { StateProvider } from './context/StateContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <StateProvider>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </StateProvider>
    </TodosProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
