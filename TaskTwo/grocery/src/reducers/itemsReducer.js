import _ from 'lodash';
import { ITEMS_LIST, ADD_ITEM, DELETE_ITEM, GET_ITEM } from '../actions/types';

const INITIAL_STATE = {
	itemsList: [],
	itemToUpdate: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ITEMS_LIST:
			return { ...state, itemsList: action.payload };
		case ADD_ITEM:
			return {
				...state,
				itemsList: [ ...state.itemsList, action.payload ]
			};
		case GET_ITEM:
			const foundItem = state.itemsList.find((item) => item.id === Number(action.payload));

			return { ...state, itemToUpdate: foundItem };
		case DELETE_ITEM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
