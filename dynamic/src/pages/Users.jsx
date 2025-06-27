import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Divyansh' },
  { id: 2, name: 'Aarav' },
  { id: 3, name: 'Sara' },
];

function Users() {
  return (
    <div>
      <h2>👥 Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}'s Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
