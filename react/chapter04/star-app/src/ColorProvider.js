/* 
	상태가 있는 콘텍스트 프로바이더
	콘텍스트 프로바이더 자체로는 콘텍스트상에 들어 있는 값을 변경할 수 없다.
	콘텍스트 프로바이더를 렌더링하는 상태가 있는 컴포넌트를 만들면 상태가 변경되면
	 컴포넌트가 새로운 콘텍스트 데이터를 가지고 콘텍스트 프로바이더를 다시
	 렌더링한다. 콘텍스트 프로바이더의 자식도 새 데이터에 맞춰 다시 렌더링된다.
*/

import { createContext, useState, useContext} from "react"
import colorData from "./color-data.json"

const ColorContext=createContext()

export const useColors=()=>useContext(ColorContext)
/* 
	콘텍스트와 커스텀 훅 
	 훅스를 도입하면 콘텍스트를 소비자 컴포넌트에게 노출시킬 필요가 전혀
	  없어진다. 콘텍스트를 커스텀 훅으로 감싸면 콘텍스트 문법을 모르는 개발자도
		더 쉽게 사용할 수 있다.
*/

export default function ColorProvider({children}){
	const colorArr=colorData.colors
	const [colors,setColors]=useState(colorArr)
	/* 
		setColors를 콘텍스트에 추가하면 다른 개발자가 나중에 이 함수를 사용
		하면서 실수를 할 여지가 있다. colors배열의 값을 바꿀 수 있는 방법은
		 사용자가 색을 추가하거나, 색을 제거하거나, 색에 평점을 메기는 경우
		 이 3가지이다. 각각의 경우에 대한 함수를 콘텍스트에 추가하는 편이 더 
		 나아보인다.
	*/
	let colorsCount=colors.length
	const addColor=(title,color)=>
		setColors([
			...color,
			{
				id:colorsCount++,
				rating:0,
				title:title,
				color:color

			}
		])
	const rateColor=(id,rating)=>
		setColors(
			colors.map(color=>(color.id===id?{...color,rating}:color))
		)

	const removeColor=id=>setColors(colors.filter(color=>color.id!==id))
	return (
		<ColorContext.Provider value={{colors,addColor,removeColor,rateColor}}>
			{children}
		</ColorContext.Provider>
	)
}