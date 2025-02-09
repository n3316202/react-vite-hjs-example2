import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor 실행');
  }

  componentDidMount() {
    console.log('componentDidMount 실행');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate 실행');
    console.log('새로운 속성: ', newProps);
    console.log('새로운 상태: ', newState);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('===== componentDidUpdate =====');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  componentWillUnmount() {
    console.log('=== componentWillUnmount ===');
  }

  //render 메소드는 모든 클래스 컴포넌트에서 반드시 있어야 하는 필수사항
  render() {
    return <div>Hello!</div>;
  }
}

export default LifeCycle;
