import React from 'react'
import AboutHouse from './AboutHouse'
import OtherHouse from './otherHouse'

function MainCars(props) {
    return (
        <>
            <AboutHouse houseDatas={props.houseDatas} /> 
            <OtherHouse AllDatas={props.AllDatas}/>
        </>
    )
}

export default MainCars