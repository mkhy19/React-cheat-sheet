import React, {Component} from 'react';
import Test3 from './components/test3';
import Test4 from './components/test4';

import Welcome1 from './components/welcome1';
import Welcome2 from './components/welcome2';

import LearnState from './components/learn-state';

/* import './App.css';
 */
function Test1() {
  return (
    <div>
      This is from FIRST-1 function component
    </div>
  );
}

function Test2() {
  return (
    <div>
      This is from SECOND-2 function component
    </div>
  );
}

class App extends Component {

  render(){

    return (
      <div className="App">
        <h1><mark>Part 2</mark></h1>
        <h1><mark>Content: Component, JSX, props , state and event handling</mark></h1>
        <hr/>
        <h2><mark>Component - JSX</mark></h2>
        This is from FIRST-1 class component
        <Test1></Test1>
        <Test2/>
        <Test3/>
        <Test4/>
        <hr/>

        <Welcome1 name="Mohamed" lastName="Khaled Yousef" />
        <Welcome2 name="Ahmed" lastName="Essam"/>
        <Welcome1 name="Mohamed" lastName="Khaled Yousef">
          You are welcome to learn reactJS.  
        </Welcome1>
        <Welcome2 name="Ahmed" lastName="Essam">
        You are welcome to learn reactJS.
        </Welcome2>
        <hr/>

        <LearnState name="Esalm" lastName="Fathi"/>
        <hr/>
        
      </div>
    );
  }
}

export default App;
