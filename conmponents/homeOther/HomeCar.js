import React, { Component } from 'react'
import Slider from "react-slick";
import { GoDashboard } from 'react-icons/go'
import { GiAutoRepair, GiCartwheel } from 'react-icons/gi'
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { motion } from 'framer-motion'
import Link from 'next/link'


let easing = [0.5, 1, 0.16, 0.95];
const textVariants = {
    exit: { x: 300, opacity: 0.8, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};
const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4.5,
    slidesToScroll: 2,
    arrows: true,
    lazyLoad: 'progressive',
    waitForAnimate: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                autoPlay: true,
                autoplaySpeed: 2500,
                slidesToShow: 3.5,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                autoPlay: true,
                autoplaySpeed: 2500,
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                autoPlay: true,
                autoplaySpeed: 2500,
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 630,
            settings: {
                autoPlay: true,
                autoplaySpeed: 2500,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                autoPlay: true,
                autoplaySpeed: 2500,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },

    ]
};




const options = {
    settings: {
        // overlayColor: "rgba(25, 136, 124, 0.9)",
        // overlayColor: `${require('../../image/car1.jpg')}`,
        autoplaySpeed: 3000,
        transitionSpeed: 900,
        disableKeyboardControls: false,
        disablePanzoom: true,
        disableWheelControls: false,
        hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.6,
        lightboxTransitionTimingFunction: 'linear',
        slideAnimationType: 'slide',
        slideSpringValues: [300, 200],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear',
    },
    buttons: {
        backgroundColor: "#1b5245",
        iconColor: "rgba(255, 255, 255,1)",
        showThumbnailsButton: false,
        iconPadding: '10px'
    },
    caption: {
        captionColor: "#a6cfa5",
        captionFontFamily: "Raleway, sans-serif",
        captionFontWeight: "300",
        captionTextTransform: "uppercase",
    }
};


export class WebCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            className: 'haha'
        }
    }

    clickHandler = (e) => {
        console.log(e.target, 'heey');
        // this.setState({ selectedContent: myData[e.target.tabIndex] })
    }





    render() {
        console.log(this.props.CarsData, 'this my cars data')
        const CarsData = this.props.CarsData
        const customCaptions = CarsData.map((el, i) => {
            return (
                <div className="conPar" key={i} >
                    <div className="textCon">
                        <div className="onPar">
                        </div>
                        <div className="titlePar">
                            <span className="title">{el.Garchig}</span>
                        </div>
                        <div className="line"></div>
                        <span className="price">{`${el.VneSay}сая ${el.VneMynga}мянга`}₮</span>
                        <div className="VzvvleltPar">
                            <div className="VzvvleltCon">
                                <GoDashboard />
                                <span>{el.Vildver}</span>
                            </div>
                            <div className="VzvvleltCon">
                                <GiAutoRepair />
                                <span>{el.Hodolgvvr}</span>
                            </div>
                            {/* <div className="VzvvleltCon">
                                <GiCartwheel />
                                <span>Petrol</span>
                            </div> */}
                        </div>
                        <Link href="/aboutcars/[slug]" as={`/aboutcars/${el.slug}`}>
                            <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            <div className="WebNewsPar">
                <SRLWrapper options={options} customCaptions={customCaptions.map((el, i) => {
                    return (
                        {
                            id: i,
                            caption: el
                        }
                    )
                })} >
                    <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                        <Slider {...settings}>
                            {CarsData.map((el, i) => {
                                return (
                                    <div className="conPar" key={i}>
                                        <div className="myImg" >
                                            <img src={`${el.MainPhoto.url}`} />
                                        </div>
                                        <div className="textCon">
                                            <div className="onPar">
                                                <span className="VildverOn">{el.VildverlesenOn}</span>
                                                <span className="OrjIrsenOn">{el.OrjIsenOn}</span>
                                            </div>
                                            <div className="titlePar">
                                                <span className="title">{el.Garchig}</span>
                                            </div>
                                            <div className="line"></div>
                                            <span className="price">{`${el.VneSay}сая ${el.VneMynga}мянга`}₮</span>
                                            <div className="VzvvleltPar">
                                                <div className="VzvvleltCon">
                                                    <GoDashboard />
                                                    <span>{el.Vildver}</span>
                                                </div>
                                                <div className="VzvvleltCon">
                                                    <GiAutoRepair />
                                                    <span>{el.Hodolgvvr}</span>
                                                </div>
                                                {/* <div className="VzvvleltCon">
                                                    <GiCartwheel />
                                                    <span>{el.Hodolgvvr}</span>
                                                </div> */}
                                            </div>
                                            <Link href="/aboutcars/[slug]" as={`/aboutcars/${el.slug}`}>
                                                <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </motion.div>
                </SRLWrapper>
            </div >
        )
    }
}

export default WebCard




// import React, { Component } from 'react'

// export class WebCard extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default WebCard
