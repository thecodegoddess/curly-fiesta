// import { combineReducers } from 'redux';
import {
	TODO_VISIBILITY_FILTER,
	VISIBILITY_FILTERS,
	TODO_TOGGLE,
	TODO_REMOVE,
	TODO_ADD
} from '../config';

const { SHOW_ALL } = VISIBILITY_FILTERS;

const INITIAL_STATE = {
	visibilityFilter : SHOW_ALL,
	todos : []
};


function visibilityFilter (state = SHOW_ALL, action) {
	console.log('action.type', action.type)
	switch (action.type) {
		case TODO_VISIBILITY_FILTER:
			return action.payload.filter;

		default:
			return state;
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case TODO_ADD:
			return [...state, {
				text : action.payload.text,
				id : action.payload.id,
				completed : false
			}];

		case TODO_TOGGLE:
			return state.map((todoItem, idx) => {
				// If it matches, create a new todoitem and retyrn it
				if (idx === action.payload.id) {

					return Object.assign({}, todoItem, {
						completed : !todoItem.completed
					});

				}
				// didn't match so just return as is
				return todoItem;
			});

		case TODO_REMOVE:
			return state.filter((todoItem, idx) => {
				// if the id does not match the one to remove, keep it
				return (idx !== action.payload.id);
			});

		default:
			return state;
	}
}

function todoApp(state = INITIAL_STATE, action) {

	return {
			visibilityFilter : visibilityFilter(state.visibilityFilter, action),
			todos : todos(state.todos, action)
	}

}

// is equivalent to

// const todoApp = combineReducers({
// 	visibilityFilter,
// 	todos
// });

export default todoApp;
