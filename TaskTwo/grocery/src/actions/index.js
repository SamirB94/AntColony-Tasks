import groceryServer from '../server/groceryServer';
import history from '../history';
import { ITEMS_LIST, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, GET_ITEM } from './types';

export const itemsList = () => async (dispatch) => {
	const res = await groceryServer.get('/items');

	dispatch({ type: ITEMS_LIST, payload: res.data });
};

export const addItem = (values) => async (dispatch) => {
	const res = await groceryServer.post('/items', values);

	dispatch({ type: ADD_ITEM, payload: res.data });
	history.push('/');
};

export const editItem = (id, values) => async () => {
	await groceryServer.put(`/items/${id}`, values);
	history.push('/');
};

export const deleteItem = (id) => async (dispatch) => {
	await groceryServer.delete(`/items/${id}`);

	dispatch({ type: DELETE_ITEM, payload: id });
	history.push('/');
};

export const getItem = (id) => (dispatch) => {
	dispatch({ type: GET_ITEM, payload: id });
};
