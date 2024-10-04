import React, { useState } from 'react';

const Counter2 = () => {
  const [num, setNum] = useState(0);

  const onIncrease = () => {
    setNum(num + 2);
  };

  const onDecrease = () => {
    setNum(num - 2);
  };

  //prettier-ignore
  return (
    <div>
      <h1>{num}</h1>
       <button onClick={onIncrease}>+2</button>
       <button onClick={onDecrease}>-2</button>
    </div>
  );
};

export default Counter2;
