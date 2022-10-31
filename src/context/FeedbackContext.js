import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])

    // Using the data from server
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchFeedback()
    }, [])
    //Fetching data
    //const URL_BASE = "http://localhost:5000/feedback" //original URL
    const URL_BASE = "/feedback" //URL using proxy configured in package.json
    const DATA_SORT = "_sort=id&_order=desc"
    const fetchFeedback = async() => {
        const response = await fetch(URL_BASE + "?" + DATA_SORT)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

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
        isLoading: isLoading,
        addFeedback: addFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback: editFeedbackItem,
        updateFeedback: updateFeedback 
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext