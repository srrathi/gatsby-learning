import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Navbar />
                {props.children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout