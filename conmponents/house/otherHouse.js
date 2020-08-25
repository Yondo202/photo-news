import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { RiMastercardLine, RiPoliceCarLine } from 'react-icons/ri'
import { GiCartwheel, GiPoliceCar } from 'react-icons/gi'
import { MdUpdate, MdSystemUpdateAlt, MdKeyboardTab } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'


import { AiOutlineWindows } from "react-icons/ai";
import { FaParking } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { GiStairs, GiFootyField } from "react-icons/gi";



function otherCars() {
    return (
        <Container className="otherCarPar">
            <Row>
                <Col lg={3} md={12} sm={12}>
                    <div>hahhaha</div>
                </Col>
                <Col lg={9} md={12} sm={12}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 200 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textConPar">
                                    <span className="title">TOYOTA PRIUS 60</span>

                                    <div className="group1">
                                        <div className="content">
                                            <GiStairs />
                                            <div className="contentChild">
                                                <span className="value1">Давхар:</span>
                                                <span className="value">8 давхарт</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <GiFootyField />
                                            <div className="contentChild">
                                                <span className="value1">Талбай:</span>
                                                <span className="value">66.3 м²</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <GoLocation />
                                            <div className="contentChild">
                                                <span className="value1">Дүүрэг:</span>
                                                <span className="value">Баянзүрх</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group1">
                                        <div className="content content2">
                                            <MdLocationCity />
                                            <div className="contentChild">
                                                <span className="value1">Байрлал:</span>
                                                <span className="value">3-р хороолол</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <FaParking />
                                            <div className="contentChild">
                                                <span className="value1">Гараж:</span>
                                                <span className="value">Байхгүй</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <AiOutlineWindows />
                                            <div className="contentChild">
                                                <span className="value1">Цонх:</span>
                                                <span className="value">4</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="MainMenuPar">
                                    <span className="Price">50сая ‎₮</span>
                                    <div>
                                        <button type="button" >Дэлгэрэнгүй</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default otherCars
