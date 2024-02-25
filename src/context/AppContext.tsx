import { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
const AppContext = createContext({});
export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const data = useFetch('/todos');
	const [filterValue, setFilterValue] = useState('');
	const [allTodo, setAllTodo] = useState([]);
	const [perPage, setPerPage] = useState(10);
	const [pages, setPages] = useState([1]);
	const [activePage, setActivePage] = useState(1);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (data) {
			const filteredData = data.filter((item) =>
				item.title.includes(filterValue)
			);
			setFilteredData(filteredData);
		}
	}, [data, filterValue]);

	useEffect(() => {
		if (filteredData) {
			const paginationData = filteredData.slice(
				perPage * (activePage - 1),
				perPage * activePage
			);
			setAllTodo(paginationData);
		}
	}, [filteredData, perPage, activePage]);

	useEffect(() => {
		if (filteredData && perPage) {
			setPages(
				[...Array(Math.ceil(filteredData?.length / perPage) + 1).keys()].slice(
					1
				)
			);
			setActivePage(1);
		}
	}, [filteredData, perPage]);

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
