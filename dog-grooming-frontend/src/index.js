import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; //change different function
import thunk from "redux-thunk";
import { Provider }from 'react-redux'; //to access reduxstore, wrapping App
import groomerReducer from './reducer/groomerReducer'


import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //setting up the middleware 

let myStore = createStore(groomerReducer, composeEnhancers(applyMiddleware(thunk))) //reducer first, pass thunk, - thunk is what we gonna use it 
//reducer take the action object and update what we have in our current store it returns a new version of the store

ReactDOM.render(
<Provider store={myStore}> 
<App />
</Provider>, 
document.getElementById('root'));


