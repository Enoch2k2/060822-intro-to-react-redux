const initialState = {
  blogs: [],
  editedBlog: null,
  editMode: false,
  id: 0
}

// action would be an object

// {
//   type: "DELETE_BLOGS",
//   payload: blog
// }

// useState([])

const blogsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, {...action.payload, id: state.id + 1 }],
        id: state.id + 1
      }
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload.id)
      };
    case "EDIT_BLOG_MODE":
      return {
        ...state,
        editMode: true,
        editedBlog: action.payload
      };
    case "UPDATE_BLOG":
      const updatedBlogs = state.blogs.map(blog => {
        if(blog.id === action.payload.id) {
          return action.payload
        } else {
          return blog
        }
      })

      return {
        ...state,
        editMode: false,
        editedBlog: null,
        blogs: updatedBlogs
      }
    default:
      return state;
  }
}

export default blogsReducer;