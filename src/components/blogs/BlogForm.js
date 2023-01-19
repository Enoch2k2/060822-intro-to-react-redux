import React, {useState} from 'react'

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addBlog({ title, content })
    setTitle("")
    setContent("")
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