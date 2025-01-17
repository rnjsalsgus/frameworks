// import Checkbox2 from "./components/Checkbox2";
// import User from "./components/User";
import {useState} from "react"
import Cat from "./components/Cat";

/* 고양이를 추가할 때마다 모든 Cat컴포넌트가 다시 렌더링 된다.
	하지만 Cat컴포넌트는 순서 컴포넌트. 프롭이 같으면 출력에서 바뀌는 부분이
	없다. 따라서 다른 고양이를 추가해도 기존 고양이가 다시 렌더링되면 안된다.*/
export default function App4(){
	const [cats,setCats]=useState(["Biscuit","Jungle","Outlaw"])
	return (
		<>
			{
				cats.map((name,i)=><Cat key={i} name={name}/>)
			}
			<button onClick={()=>setCats([...cats,prompt("Name a cat")])}>Add a Cat</button>
		</>
	)
}