import React from 'react';
import "./Card.css";
import ScoreRow from '../ScoreRow/ScoreRow.tsx';

function Card(){
    return (
        <div className="Card">
            <ScoreRow teamName='Houston' score={5}/>
            <ScoreRow teamName='Los Angeles' score = {1}/>
        </div>
    );
}

export default Card;