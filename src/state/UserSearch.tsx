import { useState } from "react";

const users = [
  { name: "deva", age: 20 },
  { name: "ramyya", age: 21 },
];

const UserSearch = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: String; age: Number } | undefined>();

  const onClick = () => {
    setName("");
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    // console.log(foundUser);
    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
