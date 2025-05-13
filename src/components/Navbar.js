import React from 'react'
import propTypes from 'prop-types'
 const Navbar = props => {
    return (
        <nav className="navbar">
            <h1>{props.title}</h1>
            <ul>
                <li >{props.head}</li>
                
            </ul>
        </nav>
    )
}
Navbar.propTypes= {
    title: propTypes.string,
    head: propTypes.string
}
export default Navbar;