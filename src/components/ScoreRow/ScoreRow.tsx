import React from 'react';
import "./ScoreRow.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ScoreRowProps} from '../../types/ScoreRowProps';


function ScoreRow({teamName, score} : ScoreRowProps){
    return (
        <Container>
            <Row>
                <Col xs={10}>{teamName}</Col>
                <Col xs={2}>{score}</Col>
            </Row>
        </Container>
    );
}

export default ScoreRow;