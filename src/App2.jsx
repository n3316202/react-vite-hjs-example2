import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

{
  /* <Outlet /> 컴포넌트는 React Router v6에서 도입된 기능입니다. 
이 컴포넌트는 중첩 라우팅 (nested routing)에서 부모 라우트 내에서
자식 라우트 컴포넌트가 어디에 렌더링될지를 지정하는 위치를 나타냅니다. */
}

function Layout() {
  return (
    <div>
      <nav>{/* ... 네비게이션 링크 ... */}</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

//Route 에 들어가는 index 라는 값은 default child routes 라고 생각하면 된다

function App2() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App2;
