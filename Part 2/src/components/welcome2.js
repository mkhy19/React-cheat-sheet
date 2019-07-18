import React, {Component} from 'react';

/*
-To send props (properties)
  2-In class component, We use {this.props.name}

-{this.props.children}
  -Used to print or output the element that between the openning and closing tag
*/

class Welcome2 extends Component {
    render(){
      return (
        <div>
            <h2><mark>Send props to a class component .. [this.props.name - this.props.children]</mark></h2>
            Hi {this.props.name + " " + this.props.lastName}
            <p>{this.props.children}</p>
       </div>
      );
    }
  }
  
  export default Welcome2;
  