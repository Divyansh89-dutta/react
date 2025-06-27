import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>👤 User Profile</h2>
      <p>Viewing profile of user with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default UserProfile;
