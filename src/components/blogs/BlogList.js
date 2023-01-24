import React from 'react'
import BlogCard from './BlogCard'

import { useSelector } from 'react-redux'

const BlogList = () => {
  // grab blogs from redux store
  const { loggedIn, currentUser } = useSelector(store => store.sessions)
  const { blogs } = useSelector((store) => store.blogs)

  const blogCards = blogs.map((blog, idx) => <BlogCard key={ idx } blog={ blog} />)

  return (
    <div>
      <h3>BlogList</h3>
      <p>LoggedIn: { loggedIn ? 'true' : 'false' }</p>
      { blogCards }  
    </div>
  )
}

export default BlogList