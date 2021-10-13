// eslint-disable-next-line import/no-anonymous-default-export
const posts = (posts = [], action) => {
  switch (action.value) {
    case "FEATCH_ALL":
      return action.payload;
    case "CREATE_POST":
      return posts;
    default:
      return posts;
  }
};

export default posts;
