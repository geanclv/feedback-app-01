import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    // Calculating average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    // Considering 1 decimal, or if it's decimal 0 no decimals
    average = average.toFixed(1).replace(/[.,]0$/, "")

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats