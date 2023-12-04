import React, { useState, useEffect } from "react";
import Task from "./components/Task";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const onChange = (e) => {
		setTask(e.target.value);
	};

	const onClick = () => {
		if (todos.includes(task)) {
			setTask("");
			return;
		}
		if (task.length < 4) {
			setTask("");
			return;
		}
		setTodos([...todos, task]);
		setTask("");
	};

	const list = todos.map((todo, index) => {
		const deleteTodo = () => {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
		};
		return <Task key={todo} todo={todo} deleteTodo={deleteTodo} />;
	});

	// useEffect(() => {
	// 	console.log({ todos });
	// }, [todos]);

	return (
		<>
			<h1>ToDo List</h1>

			<input type="text" value={task} onChange={onChange} />
			<button onClick={onClick}>Add</button>
			<ul>{list}</ul>
		</>
	);
};

export default App;
