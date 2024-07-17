/* useReducer로 코드 개선하기 */

import {useReducer, useState} from "react"

export default function Checkbox2(){
	// const [checked,setChecked]=useState(false)
	// 위 코드 Reducer함수로 개선
	const [checked,toggle]=useReducer(checked=>!checked,false)
	/* useReducer는 리듀서 함수와 초기 상태 false를 받는다.
		toggle함수는 Reducer(checked=>!checked)함수를 호출해준다.
	*/



	/* toggle이라는 함수를 제공하여 익명으로 이벤트 핸들러 함수와 같은
		일을 하도록 추가
	*/
	// function toggle(){
	// 	setChecked(checked=>!checked)
	// }
	/* onChange는 예측 가능한 값인 toggle로 설정된다.
		checkbox컴포넌트를 사용할 때 마다 좀 더 예측 가능한 결과를 내놓게
		 할 수도 있다.
		Reducer함수는 가장 간단히 정의하면 현재 상태를 받아서 새로운 상태를 
		 반환하는 함수\
		toggle함수의 checked=>!checked를 reducer라는 다른 이름으로
		 부를 수 있다.
		이런 동작을 onChange이벤트에 하드코딩하는 대신, 이 로직을 Reducer로
		 추상화해서 항상 같은 결과를 내놓게 한다. 이제 컴포넌트에 useState를 
		 사용하는 대신 useReducer를 사용하면 더 개선할 수 있다.
	*/
	return (
		<>
			<input 
				type="checkbox"
				value={checked}
				/* 이 코드는 필요보다 너무 복잡하다.
					개발자가 잘못된 정보를 경우가 자주 있고, 이로 인해 코드 전체가
					깨질 수 있다. 
				*/
				// onChange={()=>setChecked(checked=>!checked)}
				onChange={toggle}
			/>
		<h1>{checked?"checked":"not checked"}</h1>
		</>
	)
}