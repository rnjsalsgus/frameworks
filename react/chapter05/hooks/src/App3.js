




// import {useEffect,useLayoutEffect} from "react"
import UseWindowSize from "./components/UseWindowSize"
import UseMousePosition from "./components/UseMousePosition"
function App3(){
	// useEffect(()=>console.log("useEffect"))
	// useLayoutEffect(()=>console.log("useLayoutEffect"))
	// return <div>ready</div>
	return <UseMousePosition/>
}
/* 
	App3컴포넌트에서는 useEffect가 첫 번째 hook이고 그 후 useLayoutEffect
	 발생. 하지만 로그를 보면 useLayoutEffect가 useEffect보다 먼저 발생
	 했음을 알 수 있다. useLayoutEffect는 렌더링 다음에 호출되지만
	 브라우저가 변경 내역을 화면에 그리기 전에 호출된다. 대부분의 경우
	 useEffect로 원하는 작업을 수행하기에 충분하겠지만, 사용하는 Effect가
	 브라우저 화면 그리기(UI요소의 모양을 화면에 표시함)에 필수적인 경우에는
	 useLayoutEffect를 사용하면 된다.
*/
export default App3