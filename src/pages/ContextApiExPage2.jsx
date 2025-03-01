import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');
const themeDefault = { border: '10px solid green' };
const ThemeContext = createContext(themeDefault);

const ContextApiExPage2 = () => {
  const [value, setValue] = useState(true);

  return (
    <>
      {/*Provider를 통해서 value를 설정하여 MyContext의 값을 설정할 수 있다. */}

      <MyContext.Provider value={value ? 'Good' : 'Bad'}>
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me!</button>
      </MyContext.Provider>

      <hr></hr>
      <ThemeContext.Provider value={themeDefault}>
        <Sub1></Sub1>
      </ThemeContext.Provider>
    </>
  );
};

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요: {text}</div>;
}

// function Child() {
//   return (
//     <MyContext.Consumer>
//       {(value) => <div>안녕하세요: {value}</div>}
//     </MyContext.Consumer>
//   );
// }

function Sub1() {
  const theme = useContext(ThemeContext);

  console.log(theme);
  return (
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2 />
    </div>
  );
}

function Sub2() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

export default ContextApiExPage2;
