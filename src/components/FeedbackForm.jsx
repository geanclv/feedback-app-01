import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {v4 as uuidv4} from 'uuid'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("")
    const [rating, setRating] = useState()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    // Receives the event "e"
    const handleTextChange = (e) => {
        setText(e.target.value)

        if(text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== "" && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("You should enter at least 10 characters")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                id: uuidv4(),
                text: text,
                rating: rating
            }

            handleAdd(newFeedback)
            
            setText("")
            setBtnDisabled(true)
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How you rate your service?</h2>
                <RatingSelect select={(selRating) => setRating(selRating)} />
                <div className="input-group">
                    <input onChange={handleTextChange}
                        type="text" placeholder='Write a review'
                        value={text} />
                    <Button type="submit"
                        isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm