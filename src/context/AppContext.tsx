import { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
const AppContext = createContext({});
export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [filterValue, setFilterValue] = useState('');
	const data = useFetch(
		`/todos${filterValue ? `?title_like=${filterValue}` : ''}`
	);
	const [allTodo, setAllTodo] = useState([]);
	const [perPage, setPerPage] = useState(10);
	const [pages, setPages] = useState([1]);
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		if (data) {
			const paginationData = data.slice(
				perPage * (activePage - 1),
				perPage * activePage
			);
			setAllTodo(paginationData);
		}
	}, [data, perPage, activePage]);

	useEffect(() => {
		if (data && perPage) {
			setPages(
				[...Array(Math.ceil(data?.length / perPage) + 1).keys()].slice(1)
			);
			setActivePage(1);
		}
	}, [data, perPage]);

	return (
		<AppContext.Provider
			value={{
				allTodo,
				activePage,
				pages,
				perPage,
				setPerPage,
				setFilterValue,
				setActivePage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppContext;
