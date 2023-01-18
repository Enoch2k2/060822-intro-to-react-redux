const initialState = { blogsLoading: true, blogs: [ { title: "Test Blog 1", content: "Test Content 1" } ] }

const blogsReducer = (state=initialState, action) => {
   switch(action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      }
    // case "BLOGS_LOADED":
    //   return {
    //     ...state,
    //     blogsLoading: false,
    //     blogs: action.payload
    //   }

    default:
      return initialState;
   }
}

export default blogsReducer;

// get request -> controller -> action and does something (updates the database)?

// actions : { type: "LOAD_BLOGS"}
// actions : { type: "BLOGS_LOADED", payload: data }