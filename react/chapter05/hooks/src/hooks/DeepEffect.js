/* 
	의존 관계를 깊이 검사하기
	지금까지는 배열에 추가한 의존 관계는 문자열뿐. 문자열, 수 등의 자바스크립트
	 기본 타입은 비교 가능하다.
	일반적으로 예상할 수 있는대로 어떤 문자열이 다른 문자열과 동등한지
	 비교할 수 있다.
*/
import {useState,useEffect} from "react"
export const useAnyKeyToRender=()=>{
	// if("gnar"==="gnar"){
	// 	console.log("gnarly!!")
	// }
	/* 
		객체, 배열, 함수 등을 비교하려고 하면 비교 방법이 달라진다. 예를 들어
		두 배열을 비교
		불변의 특성, immutable
		배열의 길이나 원소가 모두 같지만 서로 다른 배열 인스턴스이기 때문에
		두 배열은 같지 않다. 자바스크립트에서 배열, 객체, 함수는 서로 같은
		인스턴스일 때만 서로 같다.
	*/
	// if([1,2,3]!==[1,2,3]){
	// console.log("두 배열은 같지만 서로 같지 않다.")
	// }
	/* 
		키보드가 눌릴 때마다 컴포넌트를 다시 렌더링하는 hook 생성
	*/
	const [,forceRender]=useState();

	useEffect(()=>{
		//브라우저 객체 모델(BOM)
		window.addEventListener("keydown",forceRender)
		return ()=>window.removeEventListener("keydown",forceRender)
	},[])
	/* 강제로 렌더링을 하기 위해 우리가 해야할 최소한의 일은 상태 변경
		함수를 호출하는 것이다.
		 컴포넌트가 최초로 렌더링될 때 keydown이벤트를 리슨한다.
		 키가 눌리면 forceRender를 호출해서 컴포넌트를 강제로 렌더링한다.
		 정리함수를 반환하는데, 이 함수는 keydown이벤트를 리슨하는 일을
		중단한다.
		 이 hook을 컴포넌트에 추가함으로써 단지 키를 누르기만 하면 컴포넌트를
		다시 렌더링할 수 있다.
	*/
}