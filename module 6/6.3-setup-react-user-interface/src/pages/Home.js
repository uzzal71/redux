import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Tags from '../components/tags/Tags';
import VideoGrid from '../components/grid/VideoGrid';
import Pagination from '../components/ui/Pagination';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Navbar />
        <Tags />
        <VideoGrid />
        <Pagination />
        <Footer />
    </>
  )
}

export default Home