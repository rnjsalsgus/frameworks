/* 
	useEffect 소개
	렌더링은 앱이 처음 적재될 때 일어나고, 프롭이나 상태값이 변경될 때도
	 일어난다. 하지만 렌더링이 끝난 다음에 다른 동작을 하고 싶은 경우에는
	 useEffect hook을 사용한다.
*/
/* 
	useState와 checked의 값을 변경해주는 함수 setChecked를 사용해 
	 checked값을 설정. 사용자는 박스를 체크하거나 해제할 수 있다. 
*/
import {useState,useEffect} from "react"

export default function Checkbox(){
	const [checked,setChecked]=useState(false)
	/* 
		alert를 렌더러 직전에 삽입해서 렌더러를 블록한다. 사용자가 알림 창의 OK
		 버튼을 클릭하기 전에는 컴포넌트가 렌더링되지 않는다. alert는 블러킹
		 함수이기 때문에 OK를 누르기 전에는 체크박스의 다음 상태가 렌더링된
		 모습을 볼 수 없다.
	*/
	// alert(`checked: ${checked.toString()}`)
	/* 
		원하는 대로 alert를 보기 위해서는 useEffect를 사용해야한다.
		useEffect 함수 안에 alert를 넣는다는 것은 이 함수를 렌더러가 렌더링을
		 한 직후에 부수 효과(side effect)로 실행한다는 뜻
	*/
	// useEffect(()=>{
	// 	alert(`checked: ${checked.toString()}`)
	// })
	/* 
		렌더러가 부수 효과로 다른 동작을 수행하고 싶을 때 useEffect를 사용
		Checkbox 함수는 UI를 렌더링 한다. 하지만 컴포넌트가 렌더링 외에
		 다른 일을 하길 원한다면 UI렌더링 외에 컴포넌트가 실행되야 하는 일을
		 효과(effect)라 부른다.
		alert, console.log, 브라우저나 네이티브 API와의 상호작용은 렌더링에
		 속하지 않는다. 컴포넌트 함수의 반환값(return)에 포함되지 않는다.
		useEffect를 사용하면 렌더링이 끝나기를 기다렸다가 alert나
		console.log등의 값을 제공할 수 있다.
	*/
	useEffect(()=>{
		console.log(checked?"Yse, checked":"No, not checked")
	})
	/* 
		useEffect는 렌더링된 프롭, 상태, 참조 등의 최종 값에 접근할 수 있다.
		useEffect는 렌더링이 끝난 다음에 발생되는 함수
	*/
	return (
		<>
			<input 
				type="checkbox" 
				value={checked}
				onClick={()=>setChecked(checked=>!checked)}
			/>
			{checked?"checked":"not checked"}
		</>
	)
	/* 
		return문 뒤에 있는 코드는 실행되지 않으므로 alert를 return다음에 
		 넣을 수는 없다.
	*/
	// alert(`checked: ${checked.toString()}`)
}
