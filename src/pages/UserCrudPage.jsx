import React, { useState } from 'react';

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

  return <div></div>;
};

export default UserCrudPage;
