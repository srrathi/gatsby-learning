import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react'
import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              html
              excerpt
              fields{
                slug
              }
            }
          }
        }
      }
    `)
  const [blog, setBlogs] = useState(data.allMarkdownRemark.edges);

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol className={blogStyles.posts}>
        {blog.map((b, idx) => {
          return (
            <li className={blogStyles.post} key={idx}>
              <h3>{b.node.frontmatter.title}</h3>
              <p>Published on: {b.node.frontmatter.date}</p>
              <Link to={`/blog/${b.node.fields.slug}`}>View Blog</Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default BlogPage