import { useEffect, useRef, useState } from "react";

const users = [
  { name: "deva", age: 20 },
  { name: "ramyya", age: 21 },
];

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: String; age: Number } | undefined>();

  const onClick = () => {
    setName("");
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>User Search</h1>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
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
