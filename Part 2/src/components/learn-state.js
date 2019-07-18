import React, {Component} from 'react';

/*
-States are a variables or data in our component and we can to modify it
-State is only in class component and we can't use it with function component
-In fact through react hooks, we can use state in function component
-We can update or change our state through events
-To update our state, we use this.setState
  -To solve this problems, there 3 ways:
    1-Using arrow function
    2-Using bind(this)
    3-Using constructor
-How to use event handling with input using event onChange

*/


class LearnState extends Component {

    //3-Using constructor
    constructor(props){
      super(props);
      this.increase10 = this.increase10.bind(this);
    }


    state = {
        user : {
            name: "Lieonel",
            lastName: "Messi"
        },
        age : 32,
        socialMedia: [
            "twitter,",
            " github"
        ],
        counter : 10,
        familyName:{
          fstName: "Mohamed",
          secName: "Khaled",
          thdName: "Yousef",
          fthName: "Mohamed"

        }


    }

    //1-Using arrow function
    decrease1 = () => {
      this.setState({counter: this.state.counter - 1});
    }

    //2-Using bind(this)
    increase5(){
      this.setState({counter: this.state.counter + 5});
    }

    //3-Using constructor
    increase10(){
      this.setState({counter: this.state.counter + 10});
    }

    test(event){
      console.log(event.target.value);
    }

    updateName1(event){
      const newName = event.target.value;

      this.setState({
        familyName: {
          fstName : newName,
          
          //If we remove secName,thdName and fthName, It will removed from our state .. Undefined
          /*
          secName: this.state.familyName.secName,
          thdName: this.state.familyName.thdName,
          fthName: this.state.familyName.fthName
          */
        }
      });
    }

    updateName2(event){
      const newName = event.target.value;

      this.setState({
        familyName: {
          //The update new value
          fstName : newName,

          //If we want to use the old values
          //This isn't best practice .. Avoid this and use spread operator 
          secName: this.state.familyName.secName,
          thdName: this.state.familyName.thdName,
          fthName: this.state.familyName.fthName
        }
      });
    }

    updateName3(event){
      const newName = event.target.value;

      this.setState({
        familyName: {
          //If we want to use the old values
          //This is the best practice .. Using spread operator or threeDots ...
          ...this.state.familyName,
          //The update new value
          fstName : newName          
        }
      });
    }

    render(){
      return (
        <div>
            <h2><mark>Print and update our state in a class component .. [this.state.name]</mark></h2>
            Hi {this.props.name + " " + this.props.lastName}
            <p>I am {this.state.user.name + ' ' + this.state.user.lastName}. I am {this.state.age} years old
            <br/>You can find my social media here: {this.state.socialMedia}
            </p>
            
            <p>this is a counter => {this.state.counter}</p>
            <button onClick={()=>{this.setState({counter: this.state.counter + 1})}}
            >Add1 - Normal way</button>
            <button onClick={this.decrease1}>Remove1 - Using arrow function</button>
            <button onClick={this.increase5.bind(this)}>Add5 - Using bind</button>
            <button onClick={this.increase10}>Add10 - Using constructor</button>
            <hr/>

            <h2><mark>How to use event handling with input using event onChange</mark></h2>
            <p>I am {this.state.familyName.fstName} {this.state.familyName.secName} {this.state.familyName.thdName} {this.state.familyName.fthName} </p>
            <input type="text" onChange={this.test.bind(this)}/>
            <br/>
            <input type="text" onChange={this.updateName1.bind(this)}/>
            <br/>
            <input type="text" onChange={this.updateName2.bind(this)}/>
            <br/>
            <input type="text" onChange={this.updateName3.bind(this)}/>
            <br/>
            <p>Best practice</p>
            <input type="text" value={this.state.familyName.fstName} onChange={this.updateName3.bind(this)}/>

       </div>
      );
    }
  }
  
  export default LearnState;
  