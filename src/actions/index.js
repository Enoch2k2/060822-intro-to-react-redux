
export const addBlog = blog => {
  // action that is going to be dispatched
  return {
    type: "ADD_BLOG",
    payload: blog
  } 
}
