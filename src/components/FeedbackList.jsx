import React from 'react'
import FeedbackItem from "./FeedbackItem"
// import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList(/*{feedback, handleDelete}*/) {
    // Using context
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No feedback registered</p>
    } else {
        // Spinner when is loading
        return isLoading
            ? (<Spinner />)
        // With Framer Motion
            : (<div className='feedback-list'>
                <AnimatePresence>
                    {feedback.map((item) => (
                        <motion.div key={item.id}
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}>
                            <FeedbackItem key={item.id} item={item}/>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>)

        // Before Framer Motion, without animation
        // return (
        //     <div className='feedback-list'>
        //         {feedback.map((item) => (
        //             <FeedbackItem key={item.id} item={item}
        //                 handleDelete = {handleDelete} />
        //         ))}
        //     </div>
        // )
    }
}

// Replaced by context use
/*FeedbackList.propTypes = {
    // basic way for arrays
    // feedback: PropTypes.array
    
    // complete way for arrays
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}*/

export default FeedbackList