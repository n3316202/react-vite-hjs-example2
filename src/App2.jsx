import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';

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
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about"> 어바웃 </Link>
      <br />
      <Link to="/products"> 프로덕트 </Link>
    </div>
  );
}

//function About() {
//  return <h1>About Page</h1>;
//}
function About() {
  const navigate = useNavigate();

  // <button
  //   onClick={() => {
  //     navigate('/about');
  //   }}
  // >
  //   어바웃 페이지로 이동하기
  // </button>;

  return (
    <div>
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        어바웃 페이지로 이동하기
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 페이지로 이동하기
      </button>

      <div>
        <h2>여기는 About 페이지입니다.</h2>
        <p>대충 쇼핑몰 페이지라는 뜻</p>
      </div>
      {/* <Outlet /> 서브 페이지가 보여질 위치를 Outlet으로 지정해준다. */}
      {/* <Outlet /> */}
      <Routes>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
    </div>
  );
}

function Products() {
  const params = useParams();
  console.log(params);

  return <h1>프로덕트 컴포넌트: {params.productId}</h1>;
}

function Location() {
  return <h1>로케이션 컴포넌트</h1>;
}

// 1.기본 라우팅

// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

//2. 중첩 라우팅
//https://velog.io/@reasonz/2022.07.14-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85-nested-routes-outlet

function App2() {
  //서브 페이지의 path는 / 를 생략하고 작성하면 된다
  //http://localhost:5174/about/location 접속
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}>
            {/* <Route path="location" element={<Location />}></Route> */}
          </Route>
          <Route path="/products/:productId" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

//3. useNavigate 사용

{
  /* <button onClick={() => { navigate('/about'); }}>
  어바웃 페이지로 이동하기
</button> */
}

{
  /* <button onClick={() => { navigate(-1); }} >
이전 페이지로 이동하기
</button> */
}

// 4. 파라미터 처리 하기
// url의 파라미터 값을 가져오기 위해 useParams()
//(✳✳ url :http://localhost:3000/products/21 인 경우)
// 👀 <Route path="products/:productId" element={<PostPage />} /> 👀
// const params = useParams();
// console.log(params);
// --console--
// {productId : 21}
export default App2;
