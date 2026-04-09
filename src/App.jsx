import { useState, useEffect } from 'react';

function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <h1>User List</h1>
      <div className="container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />  
        ))}
      </div>
    </>
  );
};

export default App;