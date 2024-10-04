import React from 'react';

const Hello3 = ({ color, name, isSpecial, isName }) => {
  return (
    //prettier-ignore
    <div style={{ color: color}}>
      이름: {isName ? name: null} <br/>
      색상:{color}<br/>
      {isSpecial ? <b>************</b> : null}
    </div>
  );
};

export default Hello3;
