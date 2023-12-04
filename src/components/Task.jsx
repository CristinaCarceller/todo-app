const Task = (props) => {
	const { todo, deleteTodo, onComplitionToggle, completed } = props;

	return (
		<li>
			<div>
				<p>{todo}</p>
				<button onClick={deleteTodo}>Delete</button>
				<button onClick={onComplitionToggle}>
					{completed ? "Completed" : "No Completed"}
				</button>
			</div>
		</li>
	);
};

export default Task;
