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

    // Update object and operation
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    // Set item to be updated
    const editFeedbackItem = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                (item.id === id ? {
                    ...item, ...updItem
                } : item)
            )
        )
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

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
        feedbackEdit: feedbackEdit,
        addFeedback: addFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback: editFeedbackItem,
        updateFeedback: updateFeedback 
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext