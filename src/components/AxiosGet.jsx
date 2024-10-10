import axios from 'axios';
import React, { useState } from 'react';

//https://jsonplaceholder.typicode.com/posts
const AxiosGet = () => {
  const [data, setDaat] = useState([]);

  const getClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        //통신이 성공 했을때
        console.log(response);
      })
      .catch()
      .then();
  };

  return (
    <div>
      <h2>엑시오스(axios) 연습</h2>
      <button onClick={getClick}>Get방식</button>
    </div>
  );
};

export default AxiosGet;
