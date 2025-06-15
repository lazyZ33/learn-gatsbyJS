import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes

  return (
    <Layout pageTitle="My Blog Posts">
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '2rem' }}>
          <h2>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <small>Posted on: {post.date}</small>
        </div>
      ))}
    </Layout>
  )
}

// This is the magic query that gets posts
export const query = graphql`
  query {
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        title
        excerpt
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />
export default BlogPage