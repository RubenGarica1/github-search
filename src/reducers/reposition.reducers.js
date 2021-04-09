import { RELOAD_REPOSITION, ADD_REPOSITION } from '../types/reposition.types';

const INITIAL_STATE = {
	repositions: [],
	repositionData: []
};

export const repositionReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RELOAD_REPOSITION:
			return { ...state, repositions: action.payload };
		case ADD_REPOSITION:
			return { ...state, repositionData: action.payload };
			default: return state;
	};
};