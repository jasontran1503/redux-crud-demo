import { ADD_POST, DELETE_POST, UPDATE_POST } from './actionTypes';

const initialState = {
  data: [
    { id: 1, title: 'title 1', body: 'body' },
    { id: 2, title: 'title 2', body: 'body' },
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST: {
      const postId = action.payload;
      const newData = state.data.filter((item) => item.id !== postId);
      return {
        ...state,
        data: newData,
      };
    }
    case ADD_POST: {
      const newData = [...state.data];
      newData.push(action.payload);
      return {
        ...state,
        data: newData,
      };
    }
    case UPDATE_POST: {
      const postItem = action.payload;
      const postIndex = state.data.findIndex((item) => item.id === postItem.id);
      const newData = [...state.data];
      newData[postIndex] = postItem;
      return {
        ...state,
        data: newData,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
