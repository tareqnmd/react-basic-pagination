import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<string | null>(null);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(timeout);
		};
	}, [delay, value]);
	return debouncedValue;
};

export default useDebounce;
