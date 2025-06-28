import React from 'react'
import { UserContext } from '../context/Context'

function Userdetails() {
    const { users } = React.useContext(UserContext)

  return (
    <div>
      <h2>User Details</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name.firstname} {user.name.lastname}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Userdetails