import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand ">{props.heading}</a>
                
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    heading : PropTypes.string
}
 