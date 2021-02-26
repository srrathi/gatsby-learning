import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react'
import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    // query{
    //     allMarkdownRemark{
    //       edges{
    //         node{
    //           frontmatter{
    //             title
    //             date
    //           }
    //           html
    //           excerpt
    //           fields{
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    // const [blog, setBlogs] = useState(data.allMarkdownRemark.edges);

        const data2 = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort:{
            fields:publishedDate,
            order:DESC
          }
        ){
          edges{
            node{
              title
              publishedDate(
                formatString: "MMMM Do, YYYY"
              )
              slug
            }
          }
        }
      }
    `)

    const [cblog, setCblog] = useState(data2.allContentfulBlogPost.edges);

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <h3>Posts from Contentful CMS</h3>
            <ol className={blogStyles.posts}>
                {cblog.map((b, idx) => {
                    return (
                        <li className={blogStyles.post} key={idx}>
                            <h3>{b.node.title}</h3>
                            <p>Published on: {b.node.publishedDate}</p>
                            <Link to={`/blog/${b.node.slug}`}>View Blog</Link>
                        </li>
                    )
                })}
            </ol>

            <h3>Posts from Markdown Files</h3>
            {/* <ol className={blogStyles.posts}>
                {blog.map((b, idx) => {
                    return (
                        <li className={blogStyles.post} key={idx}>
                            <h3>{b.node.frontmatter.title}</h3>
                            <p>Published on: {b.node.frontmatter.date}</p>
                            <Link to={`/blog/${b.node.fields.slug}`}>View Blog</Link>
                        </li>
                    )
                })}
            </ol> */}
        </Layout>
    )
}
export default BlogPage