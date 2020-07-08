import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt={props.monoster.name} src={`https://robohash.org/${props.monoster.id}?set=set2&size=180x180`} />
        <h2 key={ props.monoster.id }>{ props.monoster.name }</h2>
<p>{ props.monoster.email }</p>
    </div>
);