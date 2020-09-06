import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Col, Row } from 'react-bootstrap'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { AiTwotoneCar } from 'react-icons/ai'
import { RiMastercardLine, RiPoliceCarLine } from 'react-icons/ri'
import { GiCartwheel, GiPoliceCar } from 'react-icons/gi'
import { MdUpdate, MdSystemUpdateAlt, MdKeyboardTab } from 'react-icons/md'

import ImageGallery from 'react-image-gallery';



const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};




let easing = [0.175, 0.85, 0.42, 0.96];


const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: easing }
    }
};



function AboutCars(props) {

    const carsDAta = props.carsDAta
    console.log(carsDAta, ' my Cars Data')
    const imgData = carsDAta[0].OtherPhoto

    const myImage = imgData.map((el,i)=>{
        return(
            {
                original: el.url,
                thumbnail: el.url
            }
        )
    })
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <div style={{ marginBottom: 50 }}>
            <Container className="backCarPAr">
                <motion.div initial="exit" animate="enter" exit="exit">
                    <motion.div variants={textVariants}>
                        <Row style={{ marginTop: 10 }}>

                            <Col md={7}>
                                <div className="sliderPar">
                                    <ImageGallery items={myImage} thumbnailPosition={"left"} />
                                </div>
                            </Col>
                            <Col md={5}>

                                <div className="textPar">
                                    <h4 className="title">{carsDAta[0].Garchig}</h4>
                                    <div className="group1">
                                        <div className="content">
                                            <RiMastercardLine />
                                            <div className="contentChild">
                                                <span className="value1">Үйлдвэр:</span>
                                                <span className="value">{carsDAta[0].Vildver}</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <MdSystemUpdateAlt />
                                            <div className="contentChild">
                                                <span className="value1">Орж ирсэн:</span>
                                                <span className="value">{carsDAta[0].OrjIsenOn} он</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group1">
                                        <div className="content">
                                            <FaRegMoneyBillAlt />
                                            <div className="contentChild">
                                                <span className="value1">Үнэ:</span>
                                                <span className="value">{carsDAta[0].VneSay}сая ₮</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <MdUpdate />
                                            <div className="contentChild">
                                                <span className="value1">Үйлдвэрлэсэн:</span>
                                                <span className="value">{carsDAta[0].VildverlesenOn} он</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group1">
                                        <div className="content">
                                            <GiCartwheel />
                                            <div className="contentChild">
                                                <span className="value1">Хөдөлгүүр:</span>
                                                <span className="value">{carsDAta[0].Hodolgvvr}</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <GiPoliceCar />
                                            <div className="contentChild">
                                                <span className="value1">Марк:</span>
                                                <span className="value">{carsDAta[0].Vildver}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="DescPAr">
                                        <span> {carsDAta[0].Tailbar}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    )
}

export default AboutCars
