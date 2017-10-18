import {
	TODO_REMOVE,
	TODO_TOGGLE,
	TODO_ADD,
	TODO_VISIBILITY_FILTER
} from '../config';

let nextTodoId = 0;
export function addTodo(todoItemText) {
	return {
		type : TODO_ADD,
		payload : {
			text : todoItemText,
			id : nextTodoId++
		}
	}
}

export function removeTodo(todoIndex) {
	return {
		type : TODO_REMOVE,
		payload : {
			id : todoIndex
		}
	}
}

export function toggleTodo(todoIndex) {
	return {
		type : TODO_TOGGLE,
		payload : {
			id : todoIndex
		}
	}
}

export function setVisibility(visibilityType) {
	return {
		type : TODO_VISIBILITY_FILTER,
		payload : {
			filter : visibilityType
		}
	}
}
