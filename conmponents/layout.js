import React from 'react'
import Header from '../conmponents/header'
import Footer from '../conmponents/footer'


function layout(props) {
    return (
        <>
            <Header />
                 {props.children}
            <Footer />
        </>
    )
}

export default layout
