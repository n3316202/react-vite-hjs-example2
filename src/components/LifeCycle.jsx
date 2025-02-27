import React from 'react';

// class LifeCycle extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor 실행');
//   }

//   componentDidMount() {
//     console.log('componentDidMount 실행');
//   }

//   shouldComponentUpdate(newProps, newState) {
//     console.log('shouldComponentUpdate 실행');
//     console.log('새로운 속성: ', newProps);
//     console.log('새로운 상태: ', newState);
//     return true;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('===== componentDidUpdate =====');
//     console.log('prevProps: ', prevProps);
//     console.log('prevState: ', prevState);
//     console.log('snapshot: ', snapshot);
//   }

//   componentWillUnmount() {
//     console.log('=== componentWillUnmount ===');
//   }

//   //render 메소드는 모든 클래스 컴포넌트에서 반드시 있어야 하는 필수사항
//   render() {
//     return <div>Hello!</div>;
//   }
// }

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount 실행');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // count 값이 변경될 때만 렌더링
    console.log('새로운 속성: ', nextProps);
    console.log('새로운 상태: ', nextState);
    return this.state.count !== nextState.count;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Component Rendered');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default LifeCycle;
