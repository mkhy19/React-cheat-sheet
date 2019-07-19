import React from 'react';

function UsersList(props) {
    const ourData = props.ourData;
    return(<ul>
        {ourData.map((user, index) => <li key={user.id}>{index} - {user.name}</li>)}
    </ul>);
}

export default UsersList;
