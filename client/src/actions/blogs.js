const baseUrl = 'http://localhost:3001'
const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const loadBlogs = () => {
  return (dispatch) => {
    fetch(baseUrl + "/blogs")
    .then(resp => resp.json())
    .then(data => dispatch({type: "LOAD_BLOGS", payload: data}))
  }
}

export const addBlog = blog => {
  return (dispatch) => {
    fetch(baseUrl + "/blogs", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ blog })
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: "ADD_BLOG", payload: data }))
  }
}

export const deleteBlog = (blog) => {
  return dispatch => {
    fetch(baseUrl + "/blogs/" + blog.id, {
      method: "DELETE",
      headers: headers
    })
      .then(resp => resp.json()
      .then(data => dispatch({
        type: "DELETE_BLOG",
        payload: blog
      })))
  }
}

export const editBlogMode = blog => {
  return {
    type: "EDIT_BLOG_MODE",
    payload: blog
  }
}

export const updateBlog = blog => {
  return dispatch => {
    fetch(baseUrl + "/blogs/" + blog.id, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(blog)
    })
      .then(resp => resp.json())
      .then(data => dispatch({
        type: "UPDATE_BLOG",
        payload: data
      }))
  }
}