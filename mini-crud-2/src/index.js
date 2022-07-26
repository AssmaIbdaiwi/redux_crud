import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {projectReducer} from './reducers/projectReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
const store=createStore(projectReducer,applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
// const store=createStore(projectReducer,applyMiddleware(thunk))
// ReactDOM.render(
// <Provider store={store}><App/></Provider>
// ,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
