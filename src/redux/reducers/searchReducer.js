import { ADD_TO_QUERY, ADD_TO_SEARCH } from "../action";

const initialState = {
  content: [],
  query: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH:
      return {
        ...state,
        content: action.payload,
      };
    case ADD_TO_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
