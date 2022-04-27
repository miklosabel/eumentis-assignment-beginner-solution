import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Spinner } from './components/spinner/spinner';
import { User } from './components/user-card/user';
import { IUser } from './interface';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);
      } catch {
        setHasError(true);
      }
    }
    setHasError(false);
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [])

  return (
    <>
      {hasError && <p>something went wrong</p>}
      {isLoading ?
        <Spinner />
        :
        <div className='container'>
          {users.map((user: IUser) => <User userData={user} />)}
        </div>
      }
    </>
  );
}

export default App;
