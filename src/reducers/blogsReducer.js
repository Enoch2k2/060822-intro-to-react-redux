const initialState = [
  {
    title: "Some Title",
    content: "Some Content"
  }
]

// action would be an object

// {
//   type: "DELETE_BLOGS",
//   payload: blog
// }

// useState([])

const blogsReducer = (state=initialState, action) => {
  switch(action.type) {
    // case "ADD_BLOG":
    //   return [...state, action.payload]
    default:
      return state;
  }
}

export default blogsReducer;