import React from 'react';

/*
There are 2 ways to write conditions
1-size >= 2 ? <div> </div>: <div> </div>
2-ageTemplate which is the best practice

*/

function Lists(props) {
    const myTeams = ["Zamalek", "Liverpool", "FC Barcelona", "Bor. Dortmund"];
    const size = myTeams.length;

    const myAge = 23;
    let ageTemplate = '';

    //Array of objects
    let ourDate = [
      {id: 1, name:"Mohamed", age:23},
      {id: 2, name:"Ahmed", age:21},
      {id: 3, name:"Eslam", age:24}
    ];

    //ageTemplate = JSX or string
    if (myAge > 20)
    {
      ageTemplate = <h1>You are older than 20</h1>;
    }
    else
    {
      ageTemplate = 'You are not older than 20';
    }


    return (
      <div>
        <h2><mark>Lists - Loops and key keyword - Condition</mark></h2>
        <ul>
            {myTeams.map(team => <li key={team}>{team}</li>)}
        </ul>
        {size >= 2 ?
            <div> Your teams are larger than 2.</div>:
            <div> Your teams are smaller than 2.</div>
        }
        {size >= 4 ?
            <div> Your teams are larger than 4.</div>: null
        }
           
        {/* Best practice to make condition */}
        {ageTemplate}

        {/* Print array of objects */}
        <ul>
          {ourDate.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        <ul>
          {ourDate.map(user => <li key={user.id}>{user.name} - Age: {user.age}</li>)}
        </ul>
        <ul>
          {ourDate.map(user => <li key={user.id}>{user.id} - {user.name} - Age: {user.age}</li>)}
        </ul>
        <ul>
          {ourDate.map((user, index) => <li key={user.id}>{index} - {user.name} - Age: {user.age}</li>)}
        </ul>

      </div>
    );
}

export default Lists;

