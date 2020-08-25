import React from 'react'
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import { AiOutlineHome, AiOutlineCar } from 'react-icons/ai';
import { FaRegBuilding,  } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';

function footer() {
    return (
        <div className="footPar">
            <Link href="/">
                <div className="MenuPAr">
                    {/* <img src={require('../image/icons/home.png')} /> */}
                    <AiOutlineHome />
                    <div className="background"></div>
                </div>
            </Link>

            <Link href="/cars">
                <div className="MenuPAr">
                    <AiOutlineCar />
                    {/* <img src={require('../image/icons/car.png')} /> */}
                    <div className="background"></div>
                </div>
            </Link>

            <Link href="/house">
                <div className="MenuPAr">
                    <FaRegBuilding />
                    {/* <img src={require('../image/icons/apartment.png')} /> */}
                    <div className="background"></div>
                </div>
            </Link>

            <div className="MenuPAr">
                <FiFilter />
                {/* <img src={require('../image/icons/filter.png')} /> */}
                <div className="background"></div>
            </div>
        </div>
    )
}

export default footer
