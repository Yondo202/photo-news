import React, { Component } from 'react'
import Slider from "react-slick";
import { GoDashboard } from 'react-icons/go'
import { GiAutoRepair, GiCartwheel } from 'react-icons/gi'
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { motion } from 'framer-motion'



let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: 300, opacity: 0.8, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

const settings = {
    autoplay: false,
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
                slidesToShow: 0.94,
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




// const captionOne = <div class="myCustomCaptionOne">She found herself in a <span>forest...</span></div>
// const captionTwo = <div class="myCustomCaptionTwo">...lost and wandering <span>she had to make a choice...</span></div>
// const captionThree = <a href="www.simple-react-lightbox.dev" target="__blank" class="SRLCustomCaption myCustomButton">Make a choice</a>

const captionOne = <div className="conPar" >
    {/* <div className="myImg" >
        <img src={require('../../image/car3.jpg')} />
    </div> */}
    <div className="textCon">
        <div className="onPar">
        </div>
        <div className="titlePar">
            <span className="title">TOYOTA PRIUS 20asdasd</span>
        </div>
        <div className="line"></div>
        <span className="price">5сая 600 мянга ₮</span>
        <div className="VzvvleltPar">
            <div className="VzvvleltCon">
                <GoDashboard />
                <span>30k</span>
            </div>
            <div className="VzvvleltCon">
                <GiAutoRepair />
                <span>Auto</span>
            </div>
            <div className="VzvvleltCon">
                <GiCartwheel />
                <span>Petrol</span>
            </div>

        </div>
        <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
    </div>
</div>


const captionTwo = <div className="conPar" >
    {/* <div className="myImg" >
        <img src={require('../../image/car3.jpg')} />
    </div> */}
    <div className="textCon">
        <div className="onPar">
        </div>
        <div className="titlePar">
            <span className="title">TOYOTA PRIUS 20dddd</span>
        </div>
        <div className="line"></div>
        <span className="price">5сая 600 мянга ₮</span>
        <div className="VzvvleltPar">
            <div className="VzvvleltCon">
                <GoDashboard />
                <span>30k</span>
            </div>
            <div className="VzvvleltCon">
                <GiAutoRepair />
                <span>Auto</span>
            </div>
            <div className="VzvvleltCon">
                <GiCartwheel />
                <span>Petrol</span>
            </div>

        </div>
        <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
    </div>
</div>

const captionThree = <div className="conPar" >
    {/* <div className="myImg" >
        <img src={require('../../image/car3.jpg')} />
    </div> */}
    <div className="textCon">
        <div className="onPar">
        </div>
        <div className="titlePar">
            <span className="title">TOYOTA PRIUS 20</span>
        </div>
        <div className="line"></div>
        <span className="price">5сая 600 мянга ₮</span>
        <div className="VzvvleltPar">
            <div className="VzvvleltCon">
                <GoDashboard />
                <span>30k</span>
            </div>
            <div className="VzvvleltCon">
                <GiAutoRepair />
                <span>Auto</span>
            </div>
            <div className="VzvvleltCon">
                <GiCartwheel />
                <span>Petrol</span>
            </div>

        </div>
        <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
    </div>
</div>



const customCaptions = [
    { id: 1, caption: captionOne },
    { id: 2, caption: captionTwo },
    { id: 3, caption: captionThree }
]





//functional component deer
// const {openLightbox} = useLightbox()

// <button onClick={() => openLightbox(props.index)}>
// Open the lightbox at index
// </button>






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
        return (







            <div className="WebNewsPar">

                <SRLWrapper options={options} customCaptions={customCaptions}>
                    <motion.div initial="exit" animate="enter" exit="exit">

                        <Slider {...settings}>
                            <motion.div variants={textVariants}>
                                <div className="conPar" >
                                    <div className="myImg" >
                                        <img src={require('../../image/car4.jpg')} />
                                    </div>
                                    <div className="textCon">
                                        <div className="onPar">
                                            <span className="VildverOn">2016</span>
                                            <span className="OrjIrsenOn">2019</span>
                                        </div>
                                        <div className="titlePar">
                                            <span className="title">TOYOTA PRIUS 20</span>
                                        </div>
                                        <div className="line"></div>
                                        <span className="price">5сая 600 мянга ₮</span>
                                        <div className="VzvvleltPar">
                                            <div className="VzvvleltCon">
                                                <GoDashboard />
                                                <span>30k</span>
                                            </div>
                                            <div className="VzvvleltCon">
                                                <GiAutoRepair />
                                                <span>Auto</span>
                                            </div>
                                            <div className="VzvvleltCon">
                                                <GiCartwheel />
                                                <span>Petrol</span>
                                            </div>

                                        </div>
                                        <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={textVariants}>
                                <div className="conPar" >
                                    <div className="myImg" >


                                        <img src={require('../../image/car4.jpg')} />

                                    </div>
                                    <div className="textCon">
                                        <div className="onPar">
                                            <span className="VildverOn">2016</span>
                                            <span className="OrjIrsenOn">2019</span>
                                        </div>
                                        <div className="titlePar">
                                            <span className="title">TOYOTA PRIUS 20</span>
                                        </div>
                                        <div className="line"></div>
                                        <span className="price">5сая 600 мянга ₮</span>
                                        <div className="VzvvleltPar">
                                            <div className="VzvvleltCon">
                                                <GoDashboard />
                                                <span>30k</span>
                                            </div>
                                            <div className="VzvvleltCon">
                                                <GiAutoRepair />
                                                <span>Auto</span>
                                            </div>
                                            <div className="VzvvleltCon">
                                                <GiCartwheel />
                                                <span>Petrol</span>
                                            </div>

                                        </div>
                                        <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="conPar" >
                                <div className="myImg" >


                                    <img src={require('../../image/car3.jpg')} />

                                </div>
                                <div className="textCon">
                                    <div className="onPar">
                                        <span className="VildverOn">2016</span>
                                        <span className="OrjIrsenOn">2019</span>
                                    </div>
                                    <div className="titlePar">
                                        <span className="title">TOYOTA PRIUS 20</span>
                                    </div>
                                    <div className="line"></div>
                                    <span className="price">5сая 600 мянга ₮</span>
                                    <div className="VzvvleltPar">
                                        <div className="VzvvleltCon">
                                            <GoDashboard />
                                            <span>30k</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiAutoRepair />
                                            <span>Auto</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiCartwheel />
                                            <span>Petrol</span>
                                        </div>

                                    </div>
                                    <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                </div>
                            </div>
                            <div className="conPar" >
                                <div className="myImg" >


                                    <img src={require('../../image/car1.jpg')} />

                                </div>
                                <div className="textCon">
                                    <div className="onPar">
                                        <span className="VildverOn">2016</span>
                                        <span className="OrjIrsenOn">2019</span>
                                    </div>
                                    <div className="titlePar">
                                        <span className="title">TOYOTA PRIUS 20</span>
                                    </div>
                                    <div className="line"></div>
                                    <span className="price">5сая 600 мянга ₮</span>
                                    <div className="VzvvleltPar">
                                        <div className="VzvvleltCon">
                                            <GoDashboard />
                                            <span>30k</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiAutoRepair />
                                            <span>Auto</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiCartwheel />
                                            <span>Petrol</span>
                                        </div>

                                    </div>
                                    <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                </div>
                            </div>
                            <div className="conPar" >
                                <div className="myImg" >


                                    <img src={require('../../image/car4.jpg')} />

                                </div>
                                <div className="textCon">
                                    <div className="onPar">
                                        <span className="VildverOn">2016</span>
                                        <span className="OrjIrsenOn">2019</span>
                                    </div>
                                    <div className="titlePar">
                                        <span className="title">TOYOTA PRIUS 20</span>
                                    </div>
                                    <div className="line"></div>
                                    <span className="price">5сая 600 мянга ₮</span>
                                    <div className="VzvvleltPar">
                                        <div className="VzvvleltCon">
                                            <GoDashboard />
                                            <span>30k</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiAutoRepair />
                                            <span>Auto</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiCartwheel />
                                            <span>Petrol</span>
                                        </div>

                                    </div>
                                    <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                </div>
                            </div>
                            <div className="conPar" >
                                <div className="myImg" >


                                    <img src={require('../../image/car5.jpg')} />

                                </div>
                                <div className="textCon">
                                    <div className="onPar">
                                        <span className="VildverOn">2016</span>
                                        <span className="OrjIrsenOn">2019</span>
                                    </div>
                                    <div className="titlePar">
                                        <span className="title">TOYOTA PRIUS 20</span>
                                    </div>
                                    <div className="line"></div>
                                    <span className="price">5сая 600 мянга ₮</span>
                                    <div className="VzvvleltPar">
                                        <div className="VzvvleltCon">
                                            <GoDashboard />
                                            <span>30k</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiAutoRepair />
                                            <span>Auto</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiCartwheel />
                                            <span>Petrol</span>
                                        </div>

                                    </div>
                                    <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                </div>
                            </div>
                            <div className="conPar" >
                                <div className="myImg" >


                                    <img src={require('../../image/car3.jpg')} />

                                </div>
                                <div className="textCon">
                                    <div className="onPar">
                                        <span className="VildverOn">2016</span>
                                        <span className="OrjIrsenOn">2019</span>
                                    </div>
                                    <div className="titlePar">
                                        <span className="title">TOYOTA PRIUS 20</span>
                                    </div>
                                    <div className="line"></div>
                                    <span className="price">5сая 600 мянга ₮</span>
                                    <div className="VzvvleltPar">
                                        <div className="VzvvleltCon">
                                            <GoDashboard />
                                            <span>30k</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiAutoRepair />
                                            <span>Auto</span>
                                        </div>
                                        <div className="VzvvleltCon">
                                            <GiCartwheel />
                                            <span>Petrol</span>
                                        </div>

                                    </div>
                                    <button type="button" className="Delgerengui">Дэлгэрэнгүй</button>
                                </div>
                            </div>

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
