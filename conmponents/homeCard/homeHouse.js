import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: -100, opacity: 0.6, transition: { duration: 3, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 3, ease: easing }
    }
};
const textVariants2 = {
    exit: { y: 40, opacity: 0.8, transition: { duration: 3, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 2, ease: easing }
    }
};
const textVariants3 = {
    exit: { y: -40, opacity: 0.8, transition: { duration: 3, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 2, ease: easing }
    }
};



function homeHouse() {
    return (
        <Container className="HomeHouseParent">
            <Row>
                <Col md={6}>
                    <div className="ImagePar">
                        <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                            <img src={require('../../image/3dhouse2.png')} />
                        </motion.div>
                        <div className="background"></div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="TextPar">
                        <div className="texts">
                            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants3}>
                                <h2>Find Your Best House</h2>
                                <span>Бүх төрлийн байрны зар мэдээг эндээс</span>
                            </motion.div>
                            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants2}>
                                <Link href="house">
                                    <button type="button" >Хайх ...</button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default homeHouse
