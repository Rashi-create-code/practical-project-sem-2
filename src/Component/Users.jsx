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
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3 style={{color:"#497ddd"}}>Username: {user.username}</h3>
          <p style={{color:"#495add86"}}>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Fetch;