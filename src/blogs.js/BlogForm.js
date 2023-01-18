import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../actions'

const BlogForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBlog({ title, content }))
  }

  return (
    <div>
      <h3>Create Blog</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" value={ title } onChange={ e => setTitle(e.target.value) } />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <textarea id="content" value={ content } onChange={ e => setContent(e.target.value) } />
        </div>

        <input type="submit" value="Create Blog" />
      </form>
    </div>
  )
}

export default BlogForm