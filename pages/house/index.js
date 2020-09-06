import Head from 'next/head'
import Layout from '../../conmponents/layout'
import HomeHouse from '../../conmponents/homeOther/HomeHouse'
import SimpleReactLightbox from "simple-react-lightbox";
import axios from 'axios'

export default function Home(props) {
  // console.log(props.apartmentData, 'my Apartment Data')
  return (
    <div className="Container">
      <Head>
        <title>Houses</title>
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

      <Layout >
        <SimpleReactLightbox >
          <HomeHouse apartmentData={props.apartmentData} />
        </SimpleReactLightbox>
      </Layout>
    </div>
  )
}
export async function getServerSideProps(){
    const Apartment = await axios('https://photo-admin1.herokuapp.com/houses');
    return{ props: {
        apartmentData: Apartment.data
      }
    }
}