import { ToDo } from './TodoList';

const Todo = ({ todo }: { todo: ToDo }) => {
	return (
		<div>
			{todo.id}-{todo.title}
		</div>
	);
};

export default Todo;
