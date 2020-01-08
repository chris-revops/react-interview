import axios from 'axios';
import {
  FETCH_ITEMS,
  FETCH_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
} from '../actions/types';

// comment for test

export const fetchItems = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/items');
    dispatch({ type: FETCH_ITEMS, payload: res.data });
  } catch (error) {
    throw error;
  }
};

export const fetchItem = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/items/${id}`);
    dispatch({ type: FETCH_ITEM, payload: res.data });
  } catch (error) {
    throw error;
  }
};

export const createItem = (formValues) => async (dispatch, getState) => {
  // const { userId } = getState().auth;
  // const res = await axios.post('http://localhost:3001/items', { ...formValues, userId });
  const res = await axios.post('http://localhost:3001/items', { ...formValues });
  dispatch({ type: CREATE_ITEM, payload: res.data });
  // history.push('/');
};

export const deleteStream = (id) => async dispatch => {
  await axios.delete(`http://localhost:3001/items/${id}`);
  dispatch({ type: DELETE_ITEM, payload: id });
};

export const updateStream = (id, formValues) => async dispatch => {
  const res = await axios.patch(`http://localhost:3001/items/${id}`, formValues);
  dispatch({ type: UPDATE_ITEM, payload: res.data });
  // history.push('/'); ...or... rerouteCallback()
};