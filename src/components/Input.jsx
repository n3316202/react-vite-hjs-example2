import React, { useState } from 'react';

const Input = () => {
  //let text = '';
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  //prettier-ignore
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button>초기화</button>
      <div>
        <b>값:{text}</b>
      </div>
    </div>
  );
};

export default Input;
