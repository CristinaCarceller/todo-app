const Task = (props) => {
	const { todo, onDelete, completed, onCompletionToggle, id } = props;

	return (
		<li>
			<div>
				<p>{todo}</p>
				<button onClick={() => onDelete(id)}>Delete</button>
				<button onClick={() => onCompletionToggle(id)}>
					{completed ? "Done" : "To Do"}
				</button>
			</div>
		</li>
	);
};

export default Task;
