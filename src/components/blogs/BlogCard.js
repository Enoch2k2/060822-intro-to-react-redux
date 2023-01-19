import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <div>
      <h3>{ blog.title }</h3>
      <p>{ blog.content }</p>
    </div>
  )
}

export default BlogCard