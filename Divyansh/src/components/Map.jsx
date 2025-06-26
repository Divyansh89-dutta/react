import React from 'react'

const users = ['Alice', 'Bob', 'Charlie'];

function Map() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default Map