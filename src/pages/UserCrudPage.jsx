import React, { useState } from 'react';
import { useRef } from 'react';
import CreateUser from '../components/CreateUser';
import UserList from '../components/UserList';

const UserCrudPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '홍길동',
      email: 'abce@gmail.com',
    },
    {
      id: 2,
      username: '홍길순',
      email: 'abce@daum.com',
    },
    {
      id: 3,
      username: '바둑이',
      email: 'abce@naver.com',
    },
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(users.length + 1);

  const { username, email } = inputs;

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    //
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  //prettier-ignore
  return (
  <div className="text-center mt-5">
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}></UserList>
  </div>);
};

export default UserCrudPage;
