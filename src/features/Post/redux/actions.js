import { ADD_POST, DELETE_POST, GET_POST_DETAIL, GET_POST_LIST, UPDATE_POST } from './actionTypes';

export const getPostList = () => {
  return { type: GET_POST_LIST };
};

export const getPostDetail = (post) => {
  return { type: GET_POST_DETAIL, payload: post };
};

export const createPost = (post) => {
  return { type: ADD_POST, payload: post };
};

export const updatePost = (post) => {
  return { type: UPDATE_POST, payload: post };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST, payload: postId };
};
