import React from 'react';
import PageNavbar from '../../components/PageNavbar/PageNavbar';
import Footer from '../../components/Footer/Footer';
import "./Home.css"
import Card from '../../components/Card/Card';


const Home : React.FC = () => {
    return(
        <>
        <PageNavbar/>
        <Card></Card>
        <Footer/>
        </>
    );
}

export default Home;