import React from 'react';

export default function MotoCard(props) {
    return <div>

        <div id='componentHeader'>
            <h1 >{props.headerText}</h1>
        </div>

        <div>
            <img id='component-image' src={props.imgSrc} alt={'motoImg'} />
        </div>
        <div id='content'>
            {props.content}
        </div>


    </div>;
}

