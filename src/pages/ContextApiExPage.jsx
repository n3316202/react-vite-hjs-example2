import React from 'react';

const ContextApiExPage = () => {
  return (
    <>
      <GrandParent value="Hello World!" />
      <hr></hr>
      <Sub1></Sub1>
    </>
  );
};

function GrandParent({ value }) {
  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <div>Received: {value}</div>;
}

// function Child() {
//   return (
//     <MyContext.Consumer>
//       {(value) => <div>안녕하세요: {value}</div>}
//     </MyContext.Consumer>
//   );
// }

function Sub1() {
  return (
    <div style={{ border: '10px solid blue' }}>
      <h1>Sub1</h1>
      <Sub2 style={{ border: '10px solid blue' }} />
    </div>
  );
}

function Sub2({ style }) {
  return (
    <div style={style}>
      <h1>Sub2</h1>
      <Sub3 style={style} />
    </div>
  );
}

function Sub3({ style }) {
  return (
    <div style={style}>
      <h1>Sub3</h1>
    </div>
  );
}

export default ContextApiExPage;
