import React, { Component } from 'react';
import { createStore } from 'redux';
import todoApp from './reducers';
import logo from './logo.svg';
import './App.css';import { addTodo, toggleTodo, setVisibility} from './actions';

import { VISIBILITY_FILTERS } from './config';

// const { SHOW_ALL } = VISIBILITY_FILTERS;
// const INITIAL_STATE = {
// 	visibilityFilter : SHOW_ALL,
// 	todos : []
// };


let store = createStore(todoApp);

console.log(store.getState());
let unsubscribe = store.subscribe(()=>{
	console.log('--------------------- ')
	console.log(store.getState());
});
store.dispatch(addTodo('this is a todo'));
store.dispatch(addTodo('here is another one'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibility(VISIBILITY_FILTERS.SHOW_COMPLETED));
unsubscribe();
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
