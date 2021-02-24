import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react'
import Layout from '../components/layout'

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
            <ol>
                {blog.map((b, idx)=>{
                    return(
                        <li key={idx}>
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