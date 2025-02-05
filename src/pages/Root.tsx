import React from 'react';
import Button from '../components/Button/Button.tsx';
import Text from '../components/Text/Text.tsx';
import "./Root.css"
import Card from '../components/Card/Card.tsx';
import ScoreRow from '../components/ScoreRow/ScoreRow.tsx';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

function Root(){
    return (
        <Container className ="Root">
            <Card/>
        </Container>
    );

}

export default Root;