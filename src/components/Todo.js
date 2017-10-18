import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {

	const { onClick, completed, text} = props;
	return (
		<li
			onClick={ onClick }
			style={ {textDecoration : (completed) ? 'line-through' : 'none'} }
		>
			{ text }
		</li>
	);
};

Todo.propTypes = {
	onClick : PropTypes.func.isRequired,
	text : PropTypes.string.isRequired,
	completed : PropTypes.bool.isRequired
};

export default  Todo;
