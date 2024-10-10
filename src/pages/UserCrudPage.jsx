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
    /*
  <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
    */

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

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    // users.filter((user) => user.id !== id

    setUsers(users.filter((user) => user.id !== id));
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
      <UserList users={users} onRemove={onRemove}></UserList>
  </div>
    
);
};

export default UserCrudPage;
