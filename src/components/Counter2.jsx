import React, { useState } from 'react';

const Counter2 = () => {
  let num = 0;

  console.log('111111111111111111111111');

  const onIncrease = () => {
    num++;
    console.log(num + ':+++++++++++++++++++');
    console.log('222222222222222222222222');
  };

  const onDecrease = () => {
    num--;
    console.log(num + ':------------------');
    console.log('333333333333333333333333');
  };

  //prettier-ignore
  return (
    <div>
      <h1>{num}</h1>
       <button onClick={onIncrease}>+1</button>
       <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter2;
