import { useState } from 'react';
import AxiosGet from '../components/AxiosGet';
import { getUsers } from '../services/UserService';

const AxiosPage = () => {
  const [data, setData] = useState([]);

  const users = getUsers();
  users.then((data) => {
    setData(data);
    console.log(data);
  });

  //prettier-ignore
  return (
    <div className="text-center mt-5">
      {/* <AxiosGet></AxiosGet> */}
      <div>
      <h2>엑시오스(axios) 연습</h2>
      {/* <button onClick={getClick}>Get방식</button> */}
      {/* <button onClick={postClick}>Post방식</button> */}

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
    </div>
  );
};

export default AxiosPage;
