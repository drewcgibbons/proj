import React, { useEffect, useState } from 'react';
import "./Root.css"
import Card from '../../components/Card/Card.tsx';
import Container from 'react-bootstrap/Container';
import PageNavbar from '../../components/PageNavbar/PageNavbar.tsx';

const Root : React.FC = () => {
    //getScores();
    //console.log(cards);
    return (
        <>
        <PageNavbar/>
        <Container className='Root'>
            <Container className="CardContainer">
                <Card></Card> 
                <Card game_id={2}></Card>
                <Card game_id={3}></Card>
            </Container>
        </Container>
        </>
    );

}

export default Root;