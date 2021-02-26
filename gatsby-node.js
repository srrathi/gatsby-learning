const path = require('path');

// Used for Markdown Pages to create slugs
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;
//     // console.log(node);
//     if (node.internal.type === "MarkdownRemark") {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const blogTemplate = path.resolve('./src/templates/Blog.js')
//     const res = await graphql(`
//     query{
//         allMarkdownRemark{
//           edges{
//             node{
//               fields{
//                 slug
//               }

//             }
//           }
//         }
//       }
//     `)
//     res.data.allMarkdownRemark.edges.forEach((edge)=>{
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context:{
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
//     // 1. Get path to template
//     // 2. Get markdown data
//     // 3. Create new Pages
// }



// here we will fetch the body data from contentful CMS

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate=path.resolve('./src/templates/Blog.js')
    const res=await graphql(`
    query{
        allContentfulBlogPost{
            edges{
                node{
                    slug
                }
            }
        }
    }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}