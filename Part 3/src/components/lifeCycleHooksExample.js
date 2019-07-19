import React, {Component} from 'react';

class LifeCycleHooks extends Component {

    constructor(props){
      super(props);
      this.state = {
        time1: new Date,
        time2: new Date
      }

    }

    //To use life cycle hooks
    componentDidMount(){
      setInterval(() => {
        this.setState({
          time2: new Date
        });
      }, 1000)
    }


    render(){
      return (
        <div>
            <h2><mark>Life Cycle Hooks</mark></h2>
            Time1 is constant => <mark>{this.state.time1.toLocaleTimeString()}</mark>
            <br></br>
            Time2 is updated => <mark>{this.state.time2.toLocaleTimeString()}</mark>

       </div>
      );
    }
  }
  
  export default LifeCycleHooks;
  