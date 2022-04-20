import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './interface';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
    }
    fetchData();
  }, [])




  return (
    <div className="App">
      {users.map(user => <div>{JSON.stringify(user)}</div>)}
    </div>
  );
}

export default App;
