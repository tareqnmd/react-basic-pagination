import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
	const [data, setData] = useState(null);
	const getData = async (url: string) => {
		try {
			const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}${url}`);
			setData(await res.json());
		} catch (error) {
			setData(null);
		}
	};
	useEffect(() => {
		getData(url);
	}, [url]);
	return data;
};

export default useFetch;
