import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Movies from '../../components/Movies/Movies';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList/RowList';

const Home = () => {
  return (
    <>
    {/* <h1>Hello Netflex</h1> */}
      <Header />
      <Banner/>
      <RowList/>
      {/* <Movies/> */}
      <Footer />
    </>
  );
}

export default Home