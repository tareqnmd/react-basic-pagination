import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Pagination = () => {
	const { pages, activePage, setActivePage, perPage, setPerPage } =
		useContext(AppContext);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPerPage(Number(value));
	};
	return (
		<div className="flex-center g-10">
			<input
				className="w-40p"
				value={perPage}
				min="10"
				onChange={changeHandler}
				type="number"
			/>
			<div>
				<button
					onClick={() => setActivePage((prev) => prev - 1)}
					disabled={activePage === 1}
				>
					Prev
				</button>
				{pages.map((item) => (
					<button
						onClick={() => setActivePage(item)}
						className={`${activePage === item ? 'active-page' : ''}`}
						key={item}
					>
						{item}
					</button>
				))}
				<button
					onClick={() => setActivePage((prev) => prev + 1)}
					disabled={activePage === pages[pages.length - 1]}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
