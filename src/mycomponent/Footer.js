import React from 'react'

export default function Footer() {
    let footerstyle = {
        width: "100%",
        position: "relative",
        padding : "8px"
    }
    return (
        <>
            <footer className="bg-dark text-light py -3" style={footerstyle}>
                <p className="text-center">
                    Copyrigth &copy; 2021, All Rights Reserved.
                </p>
            </footer>
        </>
    )
}
