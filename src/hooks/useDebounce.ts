import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(null);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(timeout);
		};
	}, [value]);
	return debouncedValue;
};

export default useDebounce;
