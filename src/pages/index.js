import React from "react"
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
  `)
    return (
        <Layout>
            <h1>Hello World</h1>
            <h2>My Name is {data.site.siteMetadata.author}</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )

}
export default IndexPage