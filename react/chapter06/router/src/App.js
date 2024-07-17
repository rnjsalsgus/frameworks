
import './App.css';
import { useState } from 'react';
import Content from './content';
/* 라우팅 경로 설정 */
function App() {
	const [page,setPage]=useState("Home")
	return (
    <div className="App">
			<ul style={{cursor:"pointer"}}>
				<li onClick={()=>{setPage("Home")}}>Home</li>
				<li onClick={()=>{setPage("About")}}>About</li>
				<li onClick={()=>{setPage("Products")}}>Products</li>
			</ul>
			<Content page={page}/>
    </div>
  );
}

export default App;
