import React, {useState, useEffect} from 'react'
import { addBlog, updateBlog } from '../../actions/blogs';
import { useDispatch, useSelector } from 'react-redux';

const BlogForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [id, setId] = useState(null);
  const { editMode, editedBlog } = useSelector(store => store.blogs )
  const dispatch = useDispatch();

  useEffect(() => {
    if(editMode) {
      setTitle(editedBlog.title)
      setContent(editedBlog.content)
      setId(editedBlog.id)
    }
  }, [editMode])

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, content, id };
    dispatch(editMode ? updateBlog(blog) : addBlog(blog))
    setTitle("")
    setContent("")
  }

  return (
    <div>
      <h3>{editMode ? "Edit" : "Create"} Blog</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" value={ title } onChange={ e => setTitle(e.target.value) } />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <textarea id="content" value={ content } onChange={ e => setContent(e.target.value) } />
        </div>

        <input type="submit" value={`${editMode ? "Edit " : "Create"} Blog`} />
      </form>
    </div>
  )
}

export default BlogForm