import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h3>This is about Title</h3>
            <p>This is my Bio.</p>
            <p> <Link to="/contact">Contact me.</Link> </p>
        </Layout>
    )
}

export default AboutPage