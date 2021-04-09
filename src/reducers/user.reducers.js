import { RELOAD_USERS, ADD_USERS, RELOAD_USERS_WORD } from '../types/users.types';

const INITIAL_STATE = {
	users: [],
	usersData: [],
	wordsearch: ""
};

export const clienteReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RELOAD_USERS:
			return { ...state, users: action.payload };
		case ADD_USERS:
			return { ...state, usersData: action.payload };
		case RELOAD_USERS_WORD:
			return { ...state, wordsearch: action.payload };
			default: return state;
	};
};