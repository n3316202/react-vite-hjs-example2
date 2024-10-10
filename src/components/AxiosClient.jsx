import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosClient = () => {
  const [data, setData] = useState([]);

  //처음 랜더링 될때 한번만 실행 시키고 싶다.
  useEffect(() => {
    getClick();
  }, []);

  const getClick = () => {
    axios
      .get('https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10')
      .then((response) => {
        //통신이 성공 했을때
        console.log(response);
        setData(response.data.contacts);
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

  // const onRemove = (id) => {
  //   // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // = user.id 가 id 인 것을 제거함
  //   // users.filter((user) => user.id !== id

  //   setUsers(users.filter((user) => user.id !== id));
  // };

  const removeClick = (event) => {
    let no = event.target.name;
    setData(data.filter((client) => client.no != no));
  };

  return (
    <div>
      <h2>클라이언트 테이블 받아오기 연습</h2>
      <button onClick={getClick}>클라이언트 데이타</button>
      <hr />

      <table width="500" border="1">
        <tr>
          <td>번호</td>
          <td>이름</td>
          <td>전화번호</td>
          <td>주소</td>
          <td>사진</td>
          <td>삭제</td>
        </tr>
      </table>

      {data.map((post, index) => (
        <>
          <tr key={index}>
            <td>{post.no}</td>
            <td>{post.name}</td>
            <td>{post.tel}</td>
            <td>{post.address}</td>
            <td>
              <img src={post.photo} />
            </td>
            <td>
              <input
                name={post.no}
                id={post.no}
                type="button"
                onClick={removeClick}
                value="삭제"
              />
            </td>
          </tr>
        </>
      ))}
    </div>
  );
};

export default AxiosClient;
