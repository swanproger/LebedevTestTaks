type GlobalState = {
	message: string;
};

export const globalState: GlobalState = {
	message: "",
};

export const setMessageReducer = (message: string) => {
	globalState.message = message;
};

export const getMessageFromState = () => {
	return globalState.message;
};
