/* 
	제어가 되는 컴포넌트
	제어가 되는 컴포넌트에서는 폼 값을 DOM이 아니라 react로 관리
	제어가 되는 컴포넌트를 사용하면 튼튼한 폼 검증 기능들을 추가가 쉬워진다
*/
/* 
	참조를 사용하면 대신 title과 color의 값을 react 상태를 통해 저장
*/
/* 
	react가 폼의 상태를 모두 제어하기 때문에 이런 컴포넌트를 제어가 되는
	 컴포넌트하고 부른다.
	여기서 제어가 되는 컴포넌트가 여러번 다시 렌더링된다는 점을 언급할만한
	 가치가 있다. 사용자가 title필드에 새로운 문자를 입력할 때마다
	 AddColorForm이 다시 렌더링 된다.
	하지만 react는 이런 부하를 처리할 수 있도록 설계되었기 때문에 괜찮다
	다만 제어가 되는 컴포넌트가 여러번 렌더링된다는 사실을 기억하고 
	 이 컴포넌트 안에 오랜 시간이 걸리는 비용이 많이 드는 처리를 추가하지
	 말라는 것. react 컴포넌트를 최적화할 경우 위의 설명을 기억하고 있다면
	 도움이 될 것
*/
import {useState} from "react"
// {useState}는 배열을 리턴
export default function AddColorForm({onNewColor=f=>f}){
	const [title,setTitle]=useState("")
	const [color,setColor]=useState("#000000")
	const submit=e=>{
		e.preventDefault()
		onNewColor(title,color)
		setTitle("")
		setColor("")
	}
	return(
		<form onSubmit={submit}>
			<input 
				value={title}
				onChange={event=>setTitle(event.target.value)}
				type="text" 
				placeholder="color title..."
				required
			/>	
			<input 
				value={color}
				onChange={event=>setColor(event.target.value)}
				type="color"
				required
			/>
			<button>ADD</button>
		</form>
	)
}