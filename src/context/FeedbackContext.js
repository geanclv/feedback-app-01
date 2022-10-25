import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "From context",
            rating: 7
        }
    ])

    // Bringing from App.js to be used in context
    const addFeedback = (newFeedback) => {
        // Adding info to our feedback array
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter(
                (item) => item.id !== id
            ))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext