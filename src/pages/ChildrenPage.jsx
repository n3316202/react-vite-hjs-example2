import React from 'react';

function Parent(props) {
  return (
    <>
      <h1>부모</h1>
      {/* outlet 과 같은 역할 */}
      <div>{props.children}</div>
    </>
  );
}

function Child() {
  return <div>자식페이지</div>;
}

const ChildrenPage = () => {
  return (
    <>
      <Parent>
        <Child />
        <Child />
      </Parent>
    </>
  );
};

export default ChildrenPage;
