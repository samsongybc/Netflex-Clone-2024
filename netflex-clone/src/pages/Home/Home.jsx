import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Movies from '../../components/Movies/Movies';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <>
    {/* <h1>Hello Netflex</h1> */}
      <Header />
      <Banner/>
      {/* <Movies/> */}
      <Footer />
    </>
  );
}

export default Home