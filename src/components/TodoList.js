import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
	const { todos, onTodoClick } = props;

	return (
		<ul>
			{
				todos.map((todoItem) => {
					return (
						<Todo
							key={ todoItem.id }
							completed={ todoItem.completed }
							text={ todoItem.text }
							onClick={ () => onTodoClick(todoItem.id) }
						/>
					);
				})
			}
		</ul>
	);
};

const { arrayOf, shape, number, bool, string, func } = PropTypes;
TodoList.propTypes = {
	todos : arrayOf(
		shape({
			id : number.isRequired,
			completed : bool.isRequired,
			text : string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick : func.isRequired
};

export default TodoList;
