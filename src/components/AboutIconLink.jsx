import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
    /*
    Basic link:
    <Link to="/about">
    ------
    With params:
    <Link to="/about?sort=name#hello">
    ------
    Complex way, putting params as object:
    <Link to={{
        pathname: "/about",
        search: "?sort=name",
        hash: "#hello"
    }}>
    */
    return (
        <div className="about-link">
            <Link to={{
                pathname: "/about",
                search: "?sort=thisParam",
                hash: "#hello"
            }}>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}

export default AboutIconLink