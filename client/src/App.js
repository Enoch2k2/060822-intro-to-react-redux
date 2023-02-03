import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBlogs } from "./actions/blogs";
import BlogForm from "./components/blogs/BlogForm";
import BlogList from "./components/blogs/BlogList";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBlogs())
  }, [])

  return (
    <div className="App">
      <h1>Blog Stuffs</h1>
      <BlogForm />
      <hr />
      <BlogList />
    </div>
  );
}

export default App;
