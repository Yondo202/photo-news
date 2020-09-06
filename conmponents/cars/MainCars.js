import React from 'react'
import AboutCar from './AboutCars'
import OtherCars from './otherCars'

function MainCars(props) {
    return (
        <>
            <AboutCar carsDAta={props.carsDAta} /> 
            <OtherCars AllDatas={props.AllDatas} />
        </>
    )
}

export default MainCars
