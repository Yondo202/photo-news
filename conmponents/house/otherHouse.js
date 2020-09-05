import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
                    <div className="allFormPAr" >
                        <form style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            <div className="groupPAr">
                                <div className="group1">
                                    <select>
                                        <option value="" selected disabled hidden>Дүүрэг</option>
                                        <option className="options">Налайх</option>
                                        <option className="options">Сонгино Хайрхан</option>
                                        <option className="options">Сүхбаатар</option>
                                        <option className="options">Хан-Уул</option>
                                        <option className="options">Чингэлтэй</option>
                                        <option className="options">Багахангай</option>
                                        <option className="options">Баянгол</option>
                                        <option className="options">Баянзүрх</option>
                                        <option className="options">Налайх</option>
                                        <option className="options">Орон нутаг</option>
                                    </select>
                                    <select>
                                        <option value="" selected disabled hidden>Байршил</option>
                                        <option>1-р хороолол</option>
                                        <option>2 - 7 буудал</option>
                                        <option>3, 4 хороолол</option>
                                        <option>5-р хороолол</option>
                                        <option>5 шар</option>
                                        <option>6-р бичил</option>
                                        <option>10-р хороолол</option>
                                        <option>11-р хороолол</option>
                                        <option>13-р хороолол</option>
                                        <option>16-р хороолол</option>
                                        <option>19-р хороолол</option>
                                        <option>25-р эмийн сан</option>
                                        <option>Бага тойрог</option>
                                        <option>Зүүн 4 зам</option>
                                    </select>
                                </div>
                                <div className="group2">
                                    <select>
                                        <option value="" selected disabled hidden>Дээд Үнэ</option>
                                        <option>5 сая</option>
                                        <option>10 сая</option>
                                        <option>20 сая</option>
                                        <option>25 сая</option>
                                        <option>30 сая</option>
                                        <option>35 сая</option>
                                        <option>40 сая</option>
                                        <option>50 сая</option>
                                        <option>60 сая</option>
                                        <option>70 сая</option>
                                        <option>90 сая</option>
                                        <option>100 сая</option>
                                        <option>200 сая</option>
                                    </select>
                                    <select>
                                        <option value="" selected disabled hidden>Доод Үнэ</option>
                                        <option>5 сая</option>
                                        <option>10 сая</option>
                                        <option>20 сая</option>
                                        <option>25 сая</option>
                                        <option>30 сая</option>
                                        <option>35 сая</option>
                                        <option>40 сая</option>
                                        <option>50 сая</option>
                                        <option>60 сая</option>
                                        <option>70 сая</option>
                                        <option>90 сая</option>
                                        <option>100 сая</option>
                                        <option>200 сая</option>
                                    </select>
                                </div>
                                <button className="submitButton" type="submit">Хайх</button>
                            </div>

                        </form>
                    </div>
                </Col>
                <Col lg={9} md={12} sm={12}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>
                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>
                                <div className="textAllPar">
                                    <div className="textConPar">
                                        <span className="title">3өрөө Байр зарна</span>
                                        <div className="group1Par">
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
                                    </div>
                                    <div className="MainMenuPar">
                                        <span className="Price">5сая ‎₮</span>
                                        <div>
                                            <button type="button" >Дэлгэрэнгүй</button>
                                        </div>
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
