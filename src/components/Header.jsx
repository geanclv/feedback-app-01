import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    const headerStyle = {
        backgroundColor:props.bgColor,
        color: props.textColor
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h1>{props.propText}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    propText: "I'm default text",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}
Header.propTypes = {
    propText: PropTypes.string,
    bgColor: PropTypes.string
}

export default Header