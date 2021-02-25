import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`query{
        site{
            siteMetadata{
                author
            }
        }
    }`)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author} &copy; 2021</p>
        </footer>
    )
}

export default Footer;