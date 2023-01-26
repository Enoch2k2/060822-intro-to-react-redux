export const addBlog = blog => {
  return {
    type: "ADD_BLOG",
    payload: blog
  }
}

export const deleteBlog = (blog) => {
  return {
    type: "DELETE_BLOG",
    payload: blog
  }
}

export const editBlogMode = blog => {
  return {
    type: "EDIT_BLOG_MODE",
    payload: blog
  }
}

export const updateBlog = blog => {
  return {
    type: "UPDATE_BLOG",
    payload: blog
  }
}