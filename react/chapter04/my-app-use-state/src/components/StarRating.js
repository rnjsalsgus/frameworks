import {useState} from "react"
import Star from "./Star.js"

const createArray = (length) => [...Array(length)];

/* 
	useState 훅이 반환하는 배열의 두 번째 요소는 상태값을 변경할 때
	 쓸 수 있는 함수
	훅이 걸린 컴포넌트를 렌더러와 연동시킨다는 것
	setSelectedStars 함수를 사용해 selectedStars의 값을 바꿀 때마다
	 StarRating 함수 컴포넌트가 훅에 의해 다시 호출되면서 렌더링이 다시
	 이뤄진다.
	훅이 걸린 데이터가 변동되면 데이터에 대한 훅이 걸린 컴포넌트에 새 값을
	 전달하면서 컴포넌트를 다시 렌더링해준다.
*/

function StarRating({ totalStars = 5 }) {
	const [selectedStars,setSelectedStars] = useState(3);
	/* selectedStars=5 직접 대입하면 오류가 발생하고 화면 갱신(렌더링)도 되지 않음 */
  return <>
      {createArray(totalStars).map((n, i)=>
        <Star 
					key={i}
					selected={selectedStars > i}
					onSelect={()=>setSelectedStars(i+1)}
				/>
      )}
      <p>{selectedStars} of {totalStars} stars</p>
  </>
}

export default StarRating;