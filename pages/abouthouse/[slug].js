import Head from 'next/head'
import Layout from '../../conmponents/layout'
import MainHouse from '../../conmponents/house/MainHouse'
import Axios from 'axios'

export default function Home(props) {
    // console.log(props.houseDatas)
    return (
        <div className="Container">
            <Head>
                <title>Photo-News</title>
                <link rel="icon" href="/favicon.ico" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />


                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.8/css/lightgallery.min.css" />
            </Head>

            <Layout>
                <MainHouse houseDatas={props.houseDatas} AllDatas={props.AllDatas} />
            </Layout>

        </div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    const houseDatas = await Axios(`https://photo-admin1.herokuapp.com/houses?slug=${slug}`)
    const AllDatas = await Axios(`https://photo-admin1.herokuapp.com/houses`)
    return {
        props: {
            houseDatas: houseDatas.data,
            AllDatas: AllDatas.data
        }
    }
}