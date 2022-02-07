import React from 'react';

export default function MotoCard(props) {
    return <div>

        <div>
            <h1 className='component-header'>{props.headerText}</h1>
        </div>

        <div>
            <img className='component-image' src={props.imgSrc} alt={'motoImg'} />
        </div>
        <div className='content'>
            {props.content}
        </div>


    </div>;
}

