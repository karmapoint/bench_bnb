import React from 'react';
import { Link } from 'react-router';


const Greeting = ({currentUser, logout}) => {

  if (currentUser === null){
    return (
      <div>
        <h1>Welcome to Front End Auth!</h1>
        <Link to='/signup'>Sign Up </Link> |||||
        <Link to='/login'>Log In </Link>

      </div>
    );
  } else {
    return  (
      <div>
        <h1> Welcome to Front End Auth!</h1>
        <h2>Hi, {currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
};

export default Greeting;
