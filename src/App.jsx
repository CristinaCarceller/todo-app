import React, { useState, useEffect } from "react";
import Task from "./components/Task";
import Sort from "./components/Sort";
// import "./app.css";

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

	//delete task
	const onDelete = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);

		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	//mark a task as completed
	const onCompletionToggle = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	//sort the list of todos alphabetically
	const sort = (sortDirection) => {
		console.log(todos, sortDirection);
		const newTodos = [...todos];
		if (sortDirection === "A-Z") {
			newTodos.sort((taskOne, taskTwo) => {
				if (taskOne.text < taskTwo.text) return -1;
				if (taskOne.text > taskTwo.text) return 1;
				return 0;
			});
		} else if (sortDirection === "Z-A") {
			newTodos.sort((taskOne, taskTwo) => {
				if (taskOne.text > taskTwo.text) return -1;
				if (taskOne.text < taskTwo.text) return 1;
				return 0;
			});
		}
		setTodos(newTodos);
	};

	useEffect(() => {
		console.log({ todos });
	}, [todos]);

	return (
		<>
			<h1>ToDo List</h1>

			<input type="text" id={todos.id} value={task} onChange={onChange} />
			<button onClick={onAdd}>Add</button>
			<Sort sort={sort} />

			{/* print todo list on the screen */}
			<ul>
				{todos.map((todo) => {
					return (
						<Task
							key={todo.id}
							id={todo.id}
							todo={todo.text}
							completed={todo.completed}
							onDelete={onDelete}
							onCompletionToggle={onCompletionToggle}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default App;
