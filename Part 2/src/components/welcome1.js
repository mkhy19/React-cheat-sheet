import React from 'react';

/*
-To send props (properties)
  1-In function component, We use {props.name}

-{props.children}
  -Used to print or output the element that between the openning and closing tag
*/

function Welcome1(props) {
    return (
      <div>
          <h2><mark>Send props to a function component .. [props.name - props.children] </mark></h2>
          Hi {props.name + " " + props.lastName}
          <p>{props.children}</p>
      </div>
    );
}

export default Welcome1;

