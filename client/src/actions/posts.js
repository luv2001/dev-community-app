import * as api from "../api/index";

// acess like this ==>
// api.function1
// api.function2
const getPost = async (dispatch) => {
  try {
    const { data } = api.fetchPosts();
    dispatch({ type: "FEATCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export default getPost;
