import React from 'react'
import { useSelector } from 'react-redux'
import BlogCard from './BlogCard'

const BlogList = () => {
  const blogs = useSelector(store => store.blogsReducer.blogs)

  const blogCards = blogs.map((blog, idx) => <BlogCard key={ idx } blog={ blog} />)

  return (
    <div>
      <h3>BlogList</h3>
      { blogCards }  
    </div>
  )
}

export default BlogList