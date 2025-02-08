import React, { useEffect, useState } from 'react';
import "./Card.css";
import ScoreRow from '../ScoreRow/ScoreRow.tsx';
import {CardProps} from '../../types/CardProps.ts'
import { ScoreRowProps } from '../../types/ScoreRowProps.ts';
import { Container, Row } from 'react-bootstrap';

const Card : React.FC<CardProps> = (cardProps : CardProps) => {
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
        fetch("/game?id=" + (cardProps.game_id ? cardProps.game_id : 1), {
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

    let score1 : ScoreRowProps = { teamName: data.team1, score: data.score1 }
    let score2 : ScoreRowProps = { teamName: data.team2, score: data.score2 }

    return (
        <Container className="Card">
                <ScoreRow teamName={score1.teamName} score={score1.score} />
                <ScoreRow teamName={score2.teamName} score={score2.score} />
        </Container>
    );
}

export default Card;