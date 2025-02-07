import React from 'react';
import "./Card.css";
import ScoreRow from '../ScoreRow/ScoreRow.tsx';
import {CardProps} from '../../types/CardProps.ts'
import { ScoreRowProps } from '../../types/ScoreRowProps.ts';

function Card(c : CardProps){
    return (
        <div className="Card">
            <ScoreRow teamName={c.scoreRow1.teamName} score={c.scoreRow1.score}/>
            <ScoreRow teamName={c.scoreRow2.teamName} score = {c.scoreRow2.score}/>
        </div>
    );
}

export default Card;