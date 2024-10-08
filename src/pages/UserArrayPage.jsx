import React, { useRef } from 'react';
import CreateUser from '../components/CreateUser';
import UserList from '../components/UserList';

const UserArrayPage = () => {
  const users = [
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
  ];

  const nextId = useRef(users.length + 1);

  const onCreate = () => {
    //배열에 항목을 추가하는 로직

    nextId.current += 1;
  };

  //prettier-ignore
  return(
  <div className="text-center mt-5">
    <CreateUser></CreateUser>
    <UserList users={users}></UserList> 
  </div>);
};

export default UserArrayPage;
