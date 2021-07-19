import React from 'react'

export default function About() {
    const about ={
        height :'82vh',
        padding :'20px'
    }
    const box={
        margin: '10px',
        border: '2px solid #f3f0f0',
        backgroundColor: '#f5eeee',
        padding: '23px'
    }
    const h2 = {
        padding :'10px'

    }
    return (
        <>
            <div style={about}>
                <h2 style={h2}> About </h2>
                <div style ={box}>
                    <h4>From overwhelmed to on top of it</h4>
                    <p>Todoist gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you.</p>
                    <p>Get a clear overview of everything on your plate and never lose track of an important task.</p>
                </div>
            </div>
        </>
    )
}
