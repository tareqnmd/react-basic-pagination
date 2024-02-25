import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Todo from './Todo';

export type ToDo = {
	id: number;
	title: string;
};

const TodoList = () => {
	const { allTodo } = useContext(AppContext);
	return (
		<div className="flex-center flex-col">
			{allTodo?.map((todo: ToDo) => (
				<Todo
					key={todo.id}
					todo={todo}
				/>
			))}
		</div>
	);
};

export default TodoList;
