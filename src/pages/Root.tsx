import React, { useEffect, useState } from 'react';
import "./Root.css"
import Card from '../components/Card/Card.tsx';
import Container from 'react-bootstrap/Container';

const Root : React.FC = () => {
    //getScores();
    //console.log(cards);
    return (
        <Container className="Root">
            <Card></Card> 
            <Card game_id={2}></Card>
            <Card game_id={3}></Card>
        </Container>
    );

}

export default Root;