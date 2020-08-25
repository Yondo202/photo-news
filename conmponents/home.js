import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { motion } from 'framer-motion'
import WebCard from './homeCard/WebCard'
import SimpleReactLightbox from "simple-react-lightbox";




function home(props) {

    return (
        <SimpleReactLightbox>
            <WebCard />
        </SimpleReactLightbox>
    )
}

export default home













// export class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isDesktop: false //This is where I am having problems
//         };

//         this.updatePredicate = this.updatePredicate.bind(this);
//     }
//     componentDidMount() {
//         this.updatePredicate();
//         window.addEventListener("resize", this.updatePredicate);
//     }

//     componentWillUnmount() {
//         window.removeEventListener("resize", this.updatePredicate);
//     }

//     updatePredicate() {
//         this.setState({ isDesktop: window.innerWidth < 800 });
//     }

//     clickHandler = (e) => {
//         console.log(e.target, 'heey');
//         // this.setState({ selectedContent: myData[e.target.tabIndex] })
//     }

//     render() {
//         const isDesktop = this.state.isDesktop;
//         console.log(this.props.carsData,'hahahhaha')
//         return (
//             <div className="homePAr">
//                 {isDesktop ? (
//                         <SimpleReactLightbox className="NoContent" onClick={this.clickHandler} >
//                             {/* <MobileCard /> */}
//                             <WebCard />
//                         </SimpleReactLightbox>

//                 ) : (
//                             <SimpleReactLightbox className="NoContent" onClick={this.clickHandler}>
//                                 <WebCard />
//                             </SimpleReactLightbox>
//                     )}
//             </div>
//         )
//     }
// }

// export default Home

















{/* <Col md={6}>
                            <div className="MainPar">
                                <div className="textPar">
                                    <h5>Welcome to</h5>
                                    <h1>MGL GRAPHY</h1>
                                    <div className="menu">
                                        <motion.ul
                                            className="container"
                                            variants={container}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <GrFacebookOption />
                                            <AiOutlineTwitter />
                                            <AiOutlineGooglePlus />
                                            <AiFillInstagram />
                                            <TiSocialYoutubeCircular />
                                        </motion.ul>

                                    </div>
                                </div>
                                <Link href="/album">
                                    <button type="button" className="Allbutton">Бүгдийг харах</button>
                                </Link>
                            </div>
                        </Col> */}