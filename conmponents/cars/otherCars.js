import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { RiMastercardLine, RiPoliceCarLine } from 'react-icons/ri'
import { GiCartwheel, GiPoliceCar } from 'react-icons/gi'
import { MdUpdate, MdSystemUpdateAlt, MdKeyboardTab } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

let easing = [0.175, 0.85, 0.42, 0.96];
const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
};

function otherCars() {
    return (
        <Container className="otherCarPar">
            <Row style={{ marginBottom: 70 }}>
                <Col lg={3} md={12} sm={12}>
                    <div className="allFormPAr" >
                        <form style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            <div className="groupPAr">
                                <div className="group1">
                                    <select>
                                        <option value="" selected disabled hidden>Үйлдвэр</option>
                                        <option className="options">Audio</option>
                                        <option className="options">Ford</option>
                                        <option className="options">BMW</option>
                                        <option className="options">Hyndai</option>
                                    </select>
                                    <select>
                                        <option value="" selected disabled hidden>Хөдөлгүүр</option>
                                        <option>Бензин</option>
                                        <option>Дизель</option>
                                        <option>Газ</option>
                                        <option>Хайбрид</option>
                                        <option>Цахилгаан</option>
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
                                <div className="group3">
                                    <select >
                                        <option value="" selected disabled hidden>Үйлдвэрлэсэн он</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>

                                    </select>
                                    <select>
                                        <option value="" selected disabled hidden>Орж ирсэн он</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                    </select>
                                </div>
                                <button className="submitButton" type="submit">Хайх</button>
                            </div>

                        </form>
                    </div>
                </Col>
                <Col lg={9} md={12} sm={12}>
                    <motion.div initial="exit" animate="enter" exit="exit">
                        <motion.div variants={textVariants}>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <div className="carsPar" style={{ marginBottom: 20 }}>
                                        <div className="imgPar">
                                            <img src={require('../../image/car11.png')} />
                                        </div>
                                        <div className="textAllPar">
                                            <div className="textConPar">
                                                <span className="title">TOYOTA PRIUS 60</span>
                                                <div className="group1Par">
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
                        </motion.div>
                    </motion.div>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textAllPar">
                                    <div className="textConPar">
                                        <span className="title">TOYOTA PRIUS 60</span>
                                        <div className="group1Par">
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
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textAllPar">
                                    <div className="textConPar">
                                        <span className="title">TOYOTA PRIUS 60</span>
                                        <div className="group1Par">
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
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textAllPar">
                                    <div className="textConPar">
                                        <span className="title">TOYOTA PRIUS 60</span>
                                        <div className="group1Par">
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
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textAllPar">
                                    <div className="textConPar">
                                        <span className="title">TOYOTA PRIUS 60</span>
                                        <div className="group1Par">
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
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="carsPar" style={{ marginBottom: 20 }}>

                                <div className="imgPar">
                                    <img src={require('../../image/car11.png')} />
                                </div>

                                <div className="textAllPar">
                                    <div className="textConPar">
                                        <span className="title">TOYOTA PRIUS 60</span>
                                        <div className="group1Par">
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
