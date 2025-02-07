import React from 'react';
import Button from '../components/Button/Button.tsx';
import Text from '../components/Text/Text.tsx';
import "./Root.css"
import Card from '../components/Card/Card.tsx';
import ScoreRow from '../components/ScoreRow/ScoreRow.tsx';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { CardProps } from '../types/CardProps.ts'
import { ScoreRowProps } from '../types/ScoreRowProps.ts';

function Root() {

    let cards : CardProps[] = [];
    function getScores() {
        console.log(1);
        let score1 = { teamName: "Houston", score: 5 }
        let score2 = { teamName: "Los Angeles", score: 1 }
        let scoreRowa = score1
        let scoreRowb = score2
        cards.push({ scoreRow1: scoreRowa, scoreRow2 : scoreRowb});
        console.log(2)
        console.log(3)
    }

    getScores();
    console.log(cards);
    return (
        <Container className="Root">
            <Card scoreRow1={cards[0].scoreRow1} scoreRow2={cards[0].scoreRow2}></Card> 
        </Container>
    );

}

export default Root;