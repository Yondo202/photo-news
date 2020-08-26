import React from 'react'
import { motion } from 'framer-motion'
import { Container, Col, Row } from 'react-bootstrap'
// import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

import ImageGallery from 'react-image-gallery';

import { FaParking } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { GiStairs, GiFootyField } from "react-icons/gi";





let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

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

function AboutCars({ isVisible }) {

    const myImage = [
        {
            original: `${require('../../image/car4.jpg')}`,
            thumbnail: `${require('../../image/car4.jpg')}`
        },
        {
            original: `${require('../../image/car4.jpg')}`,
            thumbnail: `${require('../../image/car4.jpg')}`
        },
        {
            original: `${require('../../image/car4.jpg')}`,
            thumbnail: `${require('../../image/car4.jpg')}`
        },
        {
            original: `${require('../../image/car4.jpg')}`,
            thumbnail: `${require('../../image/car4.jpg')}`
        },
        {
            original: `${require('../../image/car4.jpg')}`,
            thumbnail: `${require('../../image/car4.jpg')}`
        },

    ]

    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <div style={{ marginBottom: 75 }}>
            {/* <motion.ul
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    animate={{
                        x: -100,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                >
                    <h1>hahahahhah</h1>
                    <h1>hahahahhah</h1>
                    <h1>hahahahhah</h1>
                    <h1>hahahahhah</h1>
                </motion.div>
            </motion.ul>

            <motion.div
                animate={{ x: 100 }}
                transition={{ ease: "easeOut", duration: 1 }}
            >
               <div>hahahahhahahahah</div>
            </motion.div> */}
            <Container className="backCarPAr">
                <motion.div initial="exit" animate="enter" exit="exit">
                    <motion.div variants={textVariants}>
                        <Row style={{ marginTop: 10 }}>
                            <Col md={7}>
                                <div className="sliderPar">
                                    <ImageGallery items={myImage} thumbnailPosition={"left"} />
                                </div>
                                {/* <div className="imagePar">
                            <img src={require('../../image/car1.jpg')} />
                        </div> */}
                            </Col>
                            <Col md={5}>
                                <div className="textPar">
                                    <h4 className="title">TOYOTA PRIUS 20</h4>
                                    <div className="group1">
                                        <div className="content">
                                            <GiStairs />
                                            <div className="contentChild">
                                                <span className="value1">Давхар:</span>
                                                <span className="value">6 давхарт</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <GiFootyField />
                                            <div className="contentChild">
                                                <span className="value1">Талбай: </span>
                                                <span className="value">31.6 м²</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group1">
                                        <div className="content">
                                            <FaRegMoneyBillAlt />
                                            <div className="contentChild">
                                                <span className="value1">Үнэ:</span>
                                                <span className="value">80 сая ₮</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <FaParking />
                                            <div className="contentChild">
                                                <span className="value1">Гараж:</span>
                                                <span className="value">Байхгүй</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group1">
                                        <div className="content">
                                            <GoLocation />
                                            <div className="contentChild">
                                                <span className="value1">Дүүрэг:</span>
                                                <span className="value">Баянзүрх</span>
                                            </div>
                                        </div>
                                        <div className="content content2">
                                            <MdLocationCity />
                                            <div className="contentChild">
                                                <span className="value1">Байрлал:</span>
                                                <span className="value">16-р хороолол</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="DescPAr">
                                        <span>Бзд 16 хороололд

                                        ~31.6 мкв 1 өрөө байр зарна. ~Сургууль, цэцэрлэг, өрх хороо, зах худалдааны төв, автобусны буудал гээд бүх үйлчилгээдээ ойрхон

                                        ~ өвөлдөө маш дулаахан

                                        ~гаднаа тоглоомын талбайтай

                                        ~машины зогсоолтой
                                </span>
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
