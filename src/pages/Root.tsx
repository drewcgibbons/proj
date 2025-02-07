import React, { useEffect, useState } from 'react';
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
    const [data, setData] = useState({
        "team1" : "team1",
        "team2" : "team2",
        "score1" : 0,
        "score2" : 0
    });
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        const x = fetch("/data", {
            method : "GET",
            headers :{
                "accepts" : "application/json"
            }
        }).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setData(data);
            })
        );
    }, []);

        if (data){
            let score1 = { teamName: data.team1, score: data.score1 }
            let score2 = { teamName: data.team2, score: data.score2 }
            let scoreRowa = score1
            let scoreRowb = score2
            cards.push({ scoreRow1: scoreRowa, scoreRow2 : scoreRowb});
        }

    //getScores();
    //console.log(cards);
    return (
        <Container className="Root">
            <Card scoreRow1={cards[0].scoreRow1} scoreRow2={cards[0].scoreRow2}></Card> 
        </Container>
    );

}

export default Root;