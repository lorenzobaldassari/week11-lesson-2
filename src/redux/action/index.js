export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_SEARCH = "ADD_TO_SEARCH";
export const ADD_TO_QUERY = "ADD_TO_QUERY";
export const ADD_TO_COMPANY = "ADD_TO_COMPANY";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToSearchAction = (par) => {
  return {
    type: ADD_TO_SEARCH,
    payload: par,
  };
};
export const addToQueryAction = (par) => {
  return {
    type: ADD_TO_QUERY,
    payload: par,
  };
};

export const getSearchAction = (par) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + par + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        // setJobs(data);
        console.log(data);
        dispatch(addToSearchAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getQueryAction = (par) => {
  addToQueryAction(par);
};

export const removeFromFavouriteAction = (par) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: par,
  };
};

export const getCompanyAction = (par) => {
    return async (dispatch) => {
try {
    const response = await fetch(baseEndpoint + par);
    if (response.ok) {
      const { data } = await response.json();
      console.log(data);
      dispatch(addCompanyAction(data));
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.log(error);
  }}}



export const addCompanyAction = (par) => {
  return {
    type: ADD_TO_COMPANY,
    payload: par,
  };
};
