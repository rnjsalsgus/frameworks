import { useAnyKeyToRender } from "../hooks/DeepEffect"
import {useEffect,useMemo} from "react"

/* 
	의존 관계 배열에 전달할 값으로 함수 영역 안의 변수가 필요할 수도 있다.
*/
function WordCount({children=""}){
	useAnyKeyToRender()
/* words가 변경될 때만 컴포넌트를 다시 렌더링
	히
*/
	// const words=children.split("")

	// useEffect(()=>{
	// 	console.log("fresh renders")

	// },[words])
/* 리액트 팀은 이런 추가적인 렌더링을 피할 수 있는 방법을 제공, 이 문제의
 	해법은 다른 hook을 사용,useMeMo가 바로 그러한 hook
	useMeno는 메모화된 memoized값을 계산하는 함수를 호출, 컴퓨터 과학에서
	 일반적으로 메모화는 성능을 향상시크기 위한 기법이다. 메모화된 함수는 
	 함수 호출 결과를 저장하고 캐시한다. 그 후 함수에 같은 입력이 들어오면
	 캐시된 값을 반환한다. 리액트에서 useMeno를 사용하면 캐시된 값과 게산한
	 값을 비교해서 실제 값이 변경됐는지 검사해준다.
	useMemo는 우리가 useMemo에 전달한 함수를 사용해 메모화할 값을 계산
	 함으로써 작동한다.userMemo는 의존 관계가 바뀐 경우에만 이 값을 재계산
	useMemo는 자신에게 전달된 함수를 호출해서 받은 반환값을 가지고 words를 
	 설정한다. useMemo도 의존 관계 배열에 의존한다. useMemo에 의존 관계
	 배열을 전달하지 않으면 렌더링이 일어날 때마다 값을 재계산한다. 의존 관계
	 배열은 콜백 함수가 호출되야 하는 때를 결정한다.
	*/
	const words=useMemo(()=>children.split(" "),[children])
	useEffect(()=>{
		console.log("fresh renders")
	},[words])
	/* 
		words 배열은 children 속성에 의존한다. children이 바뀌면 그에 맞춰
		 words의 값도 재계산해야 한다. 이 코드에서 useMemo는 컴포넌트가 최초로
		 렌더링될 때와 children속성이 바뀔 때 words를 다시 계산한다.
		useMemo hook은 리액트 애플리케이션을 만들 때 이해해야 할 함수
	*/
	return (
		<>
			<p>{children}</p>
			<p><strong>{words.length} - words</strong></p>
		</>
	)
}

export default WordCount