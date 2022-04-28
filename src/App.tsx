import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Spinner } from './components/spinner/spinner';
import { User } from './components/user-card/user';
import { IUser } from './interface';

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('waiting 5 seconds to see spinner')
        setIsLoading(true);
        await sleep(5000);
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);
        setIsLoading(false);
      } catch {
        setHasError(true);
      }
    }

    setHasError(false);
    fetchData();
  }, [])

  return (
    <>
      {hasError && <p>something went wrong</p>}
      {isLoading ?
        <Spinner /> :
        <div className='container'>
          {users.map((user: IUser) => <User key={user.id} userData={user} />)}
        </div>
      }
    </>
  );
}

export default App;
