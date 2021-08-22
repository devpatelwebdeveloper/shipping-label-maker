import { useState, useCallback } from "react";

export const useVisualMode = (initial) => {
	const [history, setHistory] = useState([initial]);

	const transition = useCallback((newMode, replace = false) => {
		if (replace) {
			setHistory((history) =>
				history.slice(0, history.length - 1).concat(newMode)
			);
		} else {
			setHistory((history) => [...history, newMode]);
		}
		localStorage.setItem("mode", newMode);
	}, []);

	function back() {
		if (history.length > 1) {
			setHistory((history) => history.slice(0, history.length - 1));
		}
	}

	return { mode: history[history.length - 1], transition, back };
};

export const setInputValue = (name, value, setState, setErrors) => {
	setErrors((prev) => ({
		...prev,
		[name]: null,
	}));
	setState((prev) => ({
		...prev,
		[name]: value,
	}));
};

export const randomId = (length) => {
	let result = "";
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const todaysDate = () => {
	let today = new Date();
	let dd = today.getDate();
	let mmm = today.getMonth() + 1;
	const yyyy = today.getFullYear();

	return `${dd}/${mmm}/${yyyy}`;
};
