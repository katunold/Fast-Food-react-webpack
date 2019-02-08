export const capitalizeWord = (word) => {
		const first = word.charAt(0).toUpperCase();
		return `${first}${word.slice(1)}`;
};

// export const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));
