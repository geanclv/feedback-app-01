import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
// Demo to receive params

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this demo</h1>
                <p>React app to show React basics and Routing v6 and backward compat v5</p>
                <p>Version: 1.0</p>

                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage