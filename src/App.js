
import BlogForm from "./blogs.js/BlogForm";
import BlogList from "./blogs.js/BlogList";

const App = () => {
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
