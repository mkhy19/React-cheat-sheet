var app1 = <div>Hello World</div>
ReactDOM.render(app1, document.getElementById('root1'));    
//---------------------------------------

var app2 = React.createElement('div', {}, 'I am Mohamed Khaled Yousef')    
ReactDOM.render(app2, document.getElementById('root2'));
//---------------------------------------

//Using JSX - Variable and call function in JSX
const age=23, major = "CS", topics = "Algorithms";
const myTeam = "zamalek";
const toCapital = function(word){
  return word.toUpperCase();
}

var app3 = <div>
      I am {age} years old .. I studied {major} at university
      <br/> In {major}, I studied {topics + ", OS and networks"}
      <br/> {myTeam} => {toCapital(myTeam)}
    </div>
ReactDOM.render(app3, document.getElementById('root3'));    



