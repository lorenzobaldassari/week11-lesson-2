import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouriteReducer";
import searchReducer from "../reducers/searchReducer";
import companyReducer from "../reducers/companyReducer";

const chiefReducer = combineReducers({
  favourites: favouritesReducer,
  search: searchReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: chiefReducer,
});

export default store;
