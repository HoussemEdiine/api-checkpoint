import React from 'react';
import './App.css';
import UserList from './UserList'

function App() {
  return (
    <div className='container-md' 
    style={{boxShadow:'4px 8px 4px 8px grey',
    width:'450px',
    listStyle:'none',
    marginTop:'15%',
    border:"1px solid black",
    borderRadius:'8px',
    textAlign:'center',
    backgroundColor:'silver'
     
    
    }}>
      <h1>List of Users</h1>
      <UserList/>
    </div>
  );
}

export default App;
