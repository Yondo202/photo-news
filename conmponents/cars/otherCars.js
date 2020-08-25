import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { RiMastercardLine, RiPoliceCarLine } from 'react-icons/ri'
import { GiCartwheel, GiPoliceCar } from 'react-icons/gi'
import { MdUpdate, MdSystemUpdateAlt, MdKeyboardTab } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

function otherCars() {
    return (
        <Container className="otherCarPar">
            <Row>
                <Col lg={3} md={12} sm={12}>
                        <div>Filter end hiine tiimaa hahahhahahah</div>
                </Col>
                <Col  lg={9} md={12} sm={12}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textConPar">
                                    <span className="title">TOYOTA PRIUS 60</span>

                                    <div className="group1">
                                        <div className="content">
                                            <RiMastercardLine />
                                            <div className="contentChild">
                                                <span className="value1">Үйлдвэр:</span>
                                                <span className="value">Honda</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <MdSystemUpdateAlt />
                                            <div className="contentChild">
                                                <span className="value1">Орж ирсэн:</span>
                                                <span className="value">2018 он</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <MdSystemUpdateAlt />
                                            <div className="contentChild">
                                                <span className="value1">Явсан км:</span>
                                                <span className="value">2018 он</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group1">
                                        <div className="content content2">
                                            <MdUpdate />
                                            <div className="contentChild">
                                                <span className="value1">Үйлдвэрлэсэн:</span>
                                                <span className="value">2012 он</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <GiCartwheel />
                                            <div className="contentChild">
                                                <span className="value1">Хөдөлгүүр:</span>
                                                <span className="value">Цахилгаан</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <GiPoliceCar />
                                            <div className="contentChild">
                                                <span className="value1">Марк:</span>
                                                <span className="value">Adiu RX500</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="MainMenuPar">
                                    <span className="Price">5сая ‎₮</span>
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
