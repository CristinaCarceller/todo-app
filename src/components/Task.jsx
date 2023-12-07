const Task = (props) => {
	const { todo, onDelete, completed } = props;

	return (
		<li>
			<div>
				<p>{todo}</p>
				<button onClick={onDelete}>Delete</button>
				<button>{completed ? "Done" : "To Do"}</button>
			</div>
		</li>
	);
};

export default Task;
