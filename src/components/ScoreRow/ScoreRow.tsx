import React from 'react';
import "./ScoreRow.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ScoreRowProps} from '../../types/ScoreRowProps';


const ScoreRow : React.FC<ScoreRowProps> =(sProps : ScoreRowProps) => {
    return (
        <Container>
            <Row>
                <Col xs={10}>{sProps.teamName}</Col>
                <Col xs={2}>{sProps.score}</Col>
            </Row>
        </Container>
    );
}

export default ScoreRow;