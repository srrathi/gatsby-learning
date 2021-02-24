import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
// import '../styles/header.module.scss'
import headerStyles from '../styles/header.module.scss'

const Navbar = () => {
//tag Template literal
    const data = useStaticQuery(graphql` 
    query{
        site{
          siteMetadata{
            title, author, description
          }
        }
      }
    `)
    return (
        <header className={headerStyles.header}>
            <h3 ><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h3>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blogs</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;