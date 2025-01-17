import StarRating  from "./StarRating"
import {FaTrash} from "react-icons/fa"
/* 상호 작용을 검포넌트 트리 위쪽으로 전달하기
	1.리스트에서 색을 제거하는 상호작용
	2.리스트에 들어 있는 색의 평점을 변경하는 상호 작용
	자식 컴포넌트에 대해 벌어진 상호작용을 수집해서 트리의
	 위로 올려 보내서 상태가 저장된 루트 컴포넌트에 도착하게
	 해야한다.
*/
/* 각 생의 이름 앞에 해당 색을 제거하는 삭제 버튼 생성 */
export default function Color({id,title,color,rating,onRemove,onRate=f=>f}){
	return (
		<section>
					<h1>{title}</h1>
					<button onClick={()=>{onRemove(id)}}>
						<FaTrash/>
					</button>
					<div style={{height:50,
					backgroundColor:color}}></div>
					<StarRating selectedStars={rating} onRate={rating=>onRate(id,rating)}/>
				</section>
	)
}