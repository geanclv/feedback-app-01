import { useState } from 'react'

function RatingSelect({select}) {
    const [selected, setSelected] = useState()

    const handleChange = (e) => {
        // By default e.currentTarget.value is a string, so we change to number adding "+"
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    const numrows = 10
    const lstItemRating = []
    for(let i=1; i<=numrows; i++){
        lstItemRating.push(
            <li key={`li${i}`}>
                <input type="radio" id={`num${i}`}
                    name="rating" value={i}
                    onChange= {handleChange}
                    checked={selected === i} />
                <label htmlFor={`num${i}`}>{i}</label>
            </li>
        )
    }

    return (
        <ul className='rating'>
            {lstItemRating}
        </ul>
    )
}

export default RatingSelect