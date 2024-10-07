import React, { useRef, useState } from 'react';

//첫번째 사용하는 경우
//useRef 변화는 감지해야 되지만, 렌더링은 하고 싶지 않을때.

const UseRefEx1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log('호출되고 있음');

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  //prettier-ignore
  return (
    <div>
        <p>State :{count}</p>
        <p>Ref :{countRef.current}</p>
        <button onClick={increaseCountState}>State 값 올리라</button>
        <button onClick={increaseCountRef}>Ref 값 올리라</button>      
    </div>
  )
};

export default UseRefEx1;
