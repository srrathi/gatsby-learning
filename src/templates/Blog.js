import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout';
import postStyles from '../styles/post.module.scss'

// for getting of Markdown Blogs
// export const query = graphql`
// query(
//     $slug: String!
//   ){
//     markdownRemark(
//       fields: {
//         slug:{
//           eq:$slug
//         }
//       }
//     ){
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }
// `

// for fetching body data to new pages from contentful 



const Blog = (props) => {
    return (
        <Layout>

          {/* For Markdown Posts
            <div className={postStyles.post}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>Published on: {props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
                </div>
            </div> */}


            
        </Layout>
    )
}

export default Blog;
