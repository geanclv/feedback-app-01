import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
    // Conditional class
    /*return (
        <div className={`card ${reverse && "reverse"}`}>
            {children}
        </div>
    )*/

    // Conditional style
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? "#fff" : "#000"
        }}>
            {children}
        </div>
    )
}

// if the parameters is not passed or not mandatory, it will use this default
Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card