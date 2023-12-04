const Task = (props) => {
	const { todo, deleteTodo } = props;

	return (
		<li>
			<div>
				<p>{todo}</p>
				<button onClick={deleteTodo}>Delete</button>
			</div>
		</li>
	);
};

export default Task;
