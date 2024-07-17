/* 리액트 상태 관리 
	상태(state)
	상태가 있는 컴포넌트를 만드는 방법
	컴포넌트 르이의 아래 방향으로 상태를 전달하는 상법과 사용자 
	 상호작용을 컴포넌트 트리의 위쪽으로 돌려 보내는 방법
	
*/
/* 별점 컴포넌트 만들기
	5점 만점의 별점 시스템
*/

import { FaStar } from "react-icons/fa";
// import { FaDove, FaEvernote } from "react-icons/fa";
import { useState } from "react";
/* 
	점수에 따라 선택된 별은 빨간색으로 칠해져야 하고,
	선택되지 못한 별은 회색으로 표시되어야 한다.
	선택된 속성에 따라 자동으로 별을 만들어내는 컨포넌트 생성
*/

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? "red" : "grey"} size="3em" />;
};
// 인자로 전달된 개수만큼 배열을 생성하는 함수
const createArray = (length) => [...Array(length)];

/* 
	사용자가 선택한 별의 개수는 별점을 표현
	사용자가 선택한 별점을 저장하는 selectedStars라는 상태 변수 생성
	-> useState 훅을 starRating 컴포넌트에 직접 추가해서 해당 변수 생성
*/
function StarRating({ totalStars = 5 }) {
  /* useState 훅은 배열을 반환하는 호출 가능한 함수
		이 배열의 첫 번째 값이 사용하려는 상태 변수
		이 컴포넌트에서는 변수가 selectedStars이고, 이 변수의 값은
		 StarRating에서 빨간색으로 표현해야 하는 별의 개수
		useState는 배열을 반환, 배열 구조 분해를 활용하면 쉽게 
		 상태 변수에 이름을 붙일 수 있다.
		useState함수에 전달하는 값은 상태 변수의 default값이다.
		이 컴포넌스에서는 selectedStars의 초기값이 3으로 설정
	*/
  const [selectedStars] = useState(3);
  return <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
  </>
}

/* 
	사용자가 별을 클릭해서 점수를 바꿀 수 있도록 해야한다.
	점수는 rating이라는 변수에 저장하도록 한다.
	이 점수 값은 리액트 상태에 이 값을 저장하고 변경해야 한다.
	상태를 리액트 컴포넌트 뒤에 넣을 때는 훅스(Hooks)라 부르는
	 리액트 기능을 사용한다.
	훅스에는 컴포넌트 트리와 별도록 재사용 가능한 코드 로직이 들어있으며
	 혹스를  사용하면 우리가 만든 컴포넌트에 기능을 넣을 수 있다.
	리액트는 몇가지 훅을 기본 제공하므로, 즉시 이런 훅을 사용할 수 있다.
	 컴포넌트에 추가하고 싶은 때 사용할 수 있는 리액트 usestate
	 이 훅은 실제로는 리액트 패키지에 들어있다. 따라서 react 패키지를
	 임포트하기만 하면 된다.
	
*/
function App() {
  return (
    <div className="App">
      <div>
        <StarRating />
      </div>
      {/* <div>
        <StarRating totalstars={10} />
      </div> */}
      {/* <div>
        <FaDove />
        <FaEvernote />
      </div> */}
    </div>
  );
}

export default App;
