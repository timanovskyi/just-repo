import React, { useState } from 'react';

const users = [
  { name: 'Test', age: 20 },
  { name: 'Michael', age: 20 },
  { name: 'Alex', age: 20 },
];

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(
      (u) => u.name.toLowerCase() === name.toLowerCase()
    );
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>

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

export default GuestList;
