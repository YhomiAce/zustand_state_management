import React from "react";
import { useCounterStore } from "../store/counter";

const count = useCounterStore.getState().count;

const UserEmail = () => {
  const users = useCounterStore((state) => state.users);
  return (
    <div>
      <h3>{count}</h3>
      {users.map((item) => (
        <li key={item.id}>{item.email}</li>
      ))}
    </div>
  );
};

export default UserEmail;
