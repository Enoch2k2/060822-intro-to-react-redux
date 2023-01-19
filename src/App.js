import BlogForm from "./components/blogs/BlogForm";
import BlogList from "./components/blogs/BlogList";

const App = () => {
  // const [blogs, setBlogs] = useState([])

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
