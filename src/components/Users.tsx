/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useCounterStore } from "../store/counter";

const Users = () => {
  const users = useCounterStore((state) => state.users);
  const fetchUsers = useCounterStore((state) => state.fetchUsers);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default Users;
