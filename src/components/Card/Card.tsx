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

    // Get game data from API
    useEffect(() => {
        fetch("/game?id=" + (cardProps.game_id ? cardProps.game_id : 1), {
            method : "GET",
            headers :{
                "accepts" : "application/json"
            }
        }).then((res) =>
            res.json().then((data) => {
                setData({
                    "team1" : data.team1,
                    "team2" : data.team2,
                    "score1" : data.score1,
                    "score2" : data.score2
                });
            })
        );
    }, []);
    
    return (
        <Container className="Card">
                <ScoreRow teamName={data.team1} score={data.score1} />
                <ScoreRow teamName={data.team2} score={data.score2} />
        </Container>
    );
}

export default Card;