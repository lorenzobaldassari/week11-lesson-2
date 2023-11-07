import { ADD_TO_COMPANY } from "../action";


const initialState = {
  content: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COMPANY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
