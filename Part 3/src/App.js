import React, {Component} from 'react';

import Lists from './components/lists';
import LifeCycleHooks from './components/lifeCycleHooksExample';

import AgeComponent from './components/condition1';
import UsersList from './components/condition2';

/* import './App.css';
 */

class App extends Component {

  render(){
    const myAge = 23;

    //Array of objects
    let ourData = [
      {id: 1, name:"Mohamed", age:23},
      {id: 2, name:"Ahmed", age:21},
      {id: 3, name:"Eslam", age:24}
    ];

    let fansData = [
      {id: 1, name:"Zamalek", fans:3000000},
      {id: 2, name:"Liverpool", fans:4000000},
      {id: 3, name:"Barcelona", fans:1000000}
    ];

    return (
      <div className="App">
        <h1><mark>Part 3</mark></h1>
        <h1><mark>Content: Lists, Loops, Condition and Life Cycle Hooks</mark></h1>
        <hr/>

        <Lists/>
        <hr/>

        <h2><mark>Best practice for Condition and Loops</mark></h2>           
        <AgeComponent age={myAge} />
        <br/>
        <AgeComponent age={3} />
 
        <UsersList ourData={ourData} />
        <UsersList ourData={fansData} />
        <hr/>
 
        <LifeCycleHooks/>
        <hr/>

      </div>
    );
  }
}

export default App;
