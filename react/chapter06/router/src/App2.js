/* 
	렌더링할 경로에 대한 래퍼 컴포넌트를 Routes라고 부른다. Routes안에는 
	렌더링할 각 페이지에 해당하는 Route를 넣는다. 그릴고 각 페이지를 Pages.js
	파일에서 import한다.
*/
import {Routes,Route,Link} from "react-router-dom"
import { Home,About,Products } from "./Pages";
function App2() {
	return (
		<>
		<div>
			{/* react-router-dom은 브라우저 링크를 만들어주는 Link라는 
			컴포넌트를 제공한다. */}
			<h1>회사 웹사이트</h1>
			<nav>
				<ul>
					<li><Link to="/">첫페이지</Link></li>
					<li><Link to="about">회사소개</Link></li>
					<li><Link to="products">제품</Link></li>
				</ul>
			</nav>
		</div>
    <div className="App">
			{/* Routes에는 path와 element프로퍼티가 있다. 브라우저 주소가 
				path와 일치하면 element가 표시된다. 위치가 /이면 라우터는
				Home컴포넌트를 렌더링한다. 위치가 /products면 라우터는 Products
				컴포넌트를 렌더링한다. */}
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/products" element={<Products/>}/>
			</Routes>
    </div>
		</>
  );
}

export default App2;