
import './App.css';
import Checkbox from './components/Checkbox';
import DependencyRelation from "./components/DependencyRelation.1";
import NewsFeed from './components/NewsFeed';
import { useAnyKeyToRender } from './hooks/DeepEffect';
import {useEffect} from "react"
/* 
	hooks로 컴포넌트 개선하기
	리액트가 원래부터 제공하는 hook.
*/

/* 의존 관계 배열은 함수 밖에 선언된 words라는 한 인스턴스를 가리킨다.
	words는 항상 최초 렌더링될 때 똑같은 인스턴스를 가리키기 때문에 최초 
	 한번을 제외하면 "fresh render"효과가 호출되지 않는다. 항상 함수 영역
	 밖에 변수를 정의하는 이러한 해법이 매번 가능하지는(또는 추천할만하지는)
	 않다. */
const words=["foo","bar","baz"];
function App() {
	/* 키를 누를 때 마다 App컴포넌트가 렌더링된다. 렌더링될 때마다
		"fresh render"를 콘솔에 출력해서 이 사실을 보여준다. */
  useAnyKeyToRender()
	/* word가 변경되면 App컴포넌트를 다시 렌더링할 것이다. 
		모든 keydown 이벤트에 대해 useEffect를 호출하는 대신, 첫번째 렌더링
		 다음이나 word값이 바뀔 때마다 이 함수가 호출된다. 의존 관계에 기본타입
		 이나 수 타입의 값을 넣으면 예상대로 동작한다.
	*/
	// const word="gnar"
	// useEffect(()=>{
	// 	console.log("fresh render")
	// },[word])

	/* 한 단어 대신 단어로 이루어진 배열을 사용 
		words라는 단어는 배열을 참조. 렌더링이 이뤄질 때마다 새로운 배열이
		선언되기 때문에, 자바스크립트는 words가 변경됐다고 가정하고, 그에 따라
		"fresh render"효과가 매번 호출된다. 배열이 매번 새로 생성된 인스턴스
		이기 때문에, 이 인스턴스는 매번 새로운 렌더링을 발생시키는 변경을 
		등록하게 된다. */
	// const words=["foo","bar","baz"];
	useEffect(()=>{
		console.log("fresh render")
	},[words])

	return (
    <div className="App">
    </div>
  );
}

export default App;
