import React from 'react';

const person = (props) =>{
    return(
        <div className='card'>
            <h2>{props.name}</h2>
            <p>{props.msg}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;