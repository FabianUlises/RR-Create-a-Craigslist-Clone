import React from 'react';
// Component
const Posting = (props) => {
    return (
        <div className='posting' key={props.i}>
            <div className='card__header'>
                <h1>{props.data.title}</h1>
                <p>{props.data.price}</p>
            </div>
            <div className='card__image'>
                <img src={props.data.imageURL} alt={props.data.title} className='img' />
            </div>
            <div className='card__footer'>
                <p>{props.data.description}</p>
            </div>

        </div>
    )
};
export default Posting;