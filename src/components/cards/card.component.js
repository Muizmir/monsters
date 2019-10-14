import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className = 'card-container'>
        <img
             alt = "monster" 
             src = {`https://robohash.org/${props.monster.id}?set=set2&size=150x180`}
             />
        <h3> {props.monster.name} </h3>
        <h6> {props.monster.email} </h6>
    </div>
)