import React, { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>Username: {user.username}</h3>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Fetch;