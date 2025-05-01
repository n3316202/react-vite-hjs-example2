import { createContext, useState } from 'react';

// ✅ 전체 구조 요약
// createContext()로 전역 상태 공간을 만들고,
// useState()로 count 값을 관리하고,
// Provider로 하위 컴포넌트들에게 이 값을 전달합니다.

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // value를 React 트리 내부의 "Context 저장소"에 저장
  // useContext(MyContext)를 호출한 컴포넌트는 이 value를 사용
  // 값 저장소 등록기 역할
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// export const useCount = ()  => {
//   const {cnt, increment, decrement} = useContext(CountContext)
//   return {cnt, increment, decrement}
// }

export { CountContext, CountProvider };
