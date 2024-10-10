import axios from 'axios';
import React, { useState } from 'react';

//https://jsonplaceholder.typicode.com/posts
const AxiosGet = () => {
  const [data, setData] = useState([]);

  const getClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        //통신이 성공 했을때
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        //에러가 났을때 실행
        console.log(error);
      })
      .then(() => {
        // try catch finally 에서 finally 부분에 해당
        console.log('에러가 나든 안나든 무조건 실행');
      });
  };

  const postClick = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 123423,
        id: 101,
        body: 'test body홍길동',
        title: 'test title 홍길동',
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>엑시오스(axios) 연습</h2>
      <button onClick={getClick}>Get방식</button>
      <button onClick={postClick}>Post방식</button>

      <hr />

      {data.map((post, index) => (
        <>
          <div key={index}>
            <h3>타이틀:{post.title}</h3>
            <div>
              유저아이디:{post.userId} , 아이디:{post.id}
            </div>
            <div>바디:{post.body}</div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default AxiosGet;
