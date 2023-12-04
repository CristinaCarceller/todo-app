import React, { useState, useEffect } from "react";
import Task from "./components/Task";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const onChange = (e) => {
		setTask(e.target.value);
	};

	//add new task + length & repetition criteria
	const onAdd = () => {
		if (todos.includes(task)) {
			setTask("");
			return;
		}
		if (task.length < 4) {
			setTask("");
			return;
		}
		//update the state + create a unique id and a completed attribute for the task
		setTodos((todos) => [
			...todos,
			{ text: task, id: Math.random() * 10, completed: false },
		]);
		setTask("");
	};

	//print the todo list on the screen + delete tasks
	const list = todos.map((todo, index) => {
		const deleteTodo = () => {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
		};
		const onComplitionToggle = () => {
			const completedTask = [...todos];
			todo.completed = !todo.completed;
			setTodos(completedTask);
		};
		return (
			<Task
				key={todo.id}
				id={todo.id}
				todo={todo.text}
				completed={todo.completed}
				deleteTodo={deleteTodo}
				onComplitionToggle={onComplitionToggle}
			/>
		);
	});

	useEffect(() => {
		console.log({ todos });
	}, [todos]);

	return (
		<>
			<h1>ToDo List</h1>

			<input type="text" id={todos.id} value={task} onChange={onChange} />
			<button onClick={onAdd}>Add</button>
			<ul>{list}</ul>
		</>
	);
};

export default App;
