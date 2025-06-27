import React, { useEffect, useState } from 'react'

function User() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
            setLoading(false);
        });
    }, []);

    
  return (
    <div>
        <h2>👥 User List</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {user.map((user) => (
                <li key={user.id}>
                {user.name} - {user.email}
                <br />
                <span>📍 {user.address.city}, {user.address.street}</span>
                </li>
            ))}
            </ul>
        )}
    </div>
  )
}

export default User