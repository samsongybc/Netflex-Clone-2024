import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Movies from '../../components/Movies/Movies';

const Home = () => {
  return (
    <>
    {/* <h1>Hello Netflex</h1> */}
      <Header />
      <Movies/>
      <Footer />
    </>
  );
}

export default Home