import { FaStar } from "react-icons/fa"

/* 
	- 사용자가 아무 별이나 클릭할 수 있게 해야 한다.
	- onClick Handler를 FaStar 컴포넌트에 추가해서 별을 클릭할 수 있게
	 만들어야 한다.
	- onClick Handler에 onSelect 함수 추가
*/

const Star = ({selected=false,onSelect=f=>f}) => {
  return (
		<FaStar 
			color={selected ? "red" : "grey"} 
			size="3em" 
			onClick={onSelect}
			//()=>setSelectedStars(i)
		/>
	)
};

export default Star;