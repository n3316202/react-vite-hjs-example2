import React from 'react';

const Hello3 = ({ color, name, isSpecial }) => {
  return (
    //prettier-ignore
    <div style={{ color: color}}>
      안녕하세요{name} <br/>
      색상:{color}<br/>
      {isSpecial ? <b>*</b> : null}
    </div>
  );
};

export default Hello3;
