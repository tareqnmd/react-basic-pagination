import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import useDebounce from '../hooks/useDebounce';

const Filter = () => {
	const [filterText, setFilterText] = useState('');
	const { setFilterValue } = useContext(AppContext);
	const data = useDebounce(filterText);
	setFilterValue(data);
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFilterText(value);
	};
	return (
		<div className="flex-center">
			<input
				type="text"
				onChange={changeHandler}
			/>
		</div>
	);
};

export default Filter;
