import React from 'react';

function AgeComponent(props){
    let ageTemplate = '';

    //ageTemplate = JSX or string
    if (props.age > 20)
    {
      ageTemplate = <h1>You are older than 20</h1>;
    }
    else
    {
      ageTemplate = 'You are not older than 20';
    }

    return ageTemplate;
}

export default AgeComponent;
