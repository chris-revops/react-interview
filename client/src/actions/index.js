import axios from 'axios';
import {
  FETCH_COMMENTS,
  FETCH_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/types';
import reducers from '../reducers';

// export const fetchComment = (id) => async dispatch => {
//   try {
//     const res = await axios.get(`http://localhost:3001/comments/${id}`);
//     dispatch({ type: FETCH_COMMENT, payload: res.data });
//   } catch (error) {
//     throw error;
//   }
// };

export const fetchComments = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/comments');
    dispatch({ type: FETCH_COMMENTS, payload: res.data });
  } catch (error) {
    throw error;
  }
};

export const createComment = (formValues) => async dispatch => {
  const res = await axios.post('http://localhost:3001/comments', formValues);
  dispatch({ type: CREATE_COMMENT, payload: res.data });
}

export const updateComment = ({ id, score }) => async dispatch => {
  try {
    console.log(score);
    const res = await axios.patch(`http://localhost:3001/comments/${id}`, { score });
    dispatch({ type: UPDATE_COMMENT, payload: res.data });
  } catch (error) {
    throw error;
  }
};

// export const deleteComment = (id) => async dispatch => {
//   await axios.delete(`http://localhost:3001/comments/${id}`);
//   dispatch({ type: DELETE_COMMENT, payload: id });
// };