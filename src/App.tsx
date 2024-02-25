import Filter from './components/Filter';
import Pagination from './components/Pagination';
import TodoList from './components/TodoList';
import { AppContextProvider } from './context/AppContext';

const App = () => {
	return (
		<AppContextProvider>
			<h3 className="text-center">TO DO List</h3>
			<Filter />
			<TodoList />
			<Pagination />
		</AppContextProvider>
	);
};

export default App;
