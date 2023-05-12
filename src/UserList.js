import React, { useState, useEffect } from 'react';
import axios from 'axios';
function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            const updatedListOfUsers = response.data.map(user => {
              return { ...user, avatar: `https://i.pravatar.cc/150?u=${user.id}` }
            });
            setListOfUsers(updatedListOfUsers);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
      return (
        <div>
          {listOfUsers.map(user => (
            <div className="user" key={user.id}>
              <img src={user.avatar} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      );
    }
  export default UserList;
  