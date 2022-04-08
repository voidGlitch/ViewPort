import * as api from "../api";

//Action creators are function that return function
export const getPosts = () => async (dispatch) => {
  try {
    //Fetch all the data from the api we destructure it as it return the response to the data
    const { data } = await api.fetchPosts();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
  // return action instead of returning the action we need to do just dispatch the action in redux-thunk
};
/*As we are dealing with ASYNCRONOUS function we need to await and for that we use thunk allows us in here an additional arrow function*/

export const createPost = (post) => async (dispact) => {
  try {
    //As create posts function wants somedata to work on and then send it to the server
    const { data } = await api.createPosts(post);
    const action = { type: "CREATE", payload: data };
    dispact(action);
  } catch (error) {
    console.log(error.message);
  }
};

//Update Post Function
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
