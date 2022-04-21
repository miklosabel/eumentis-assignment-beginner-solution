import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './components/user';
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
    <div className="App">
      {hasError && <p>something went wrong</p>}
      {isLoading ? (
        <div><p>loading...</p></div>
      ) : (
        users.map((user: IUser) => <div>
          <User userData={user} />
        </div>
        )
      )}
    </div>
  );
}

export default App;
