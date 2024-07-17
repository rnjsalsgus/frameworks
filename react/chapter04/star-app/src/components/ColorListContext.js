
/* 
	useContext를 통해 색 얻기
	hooks를 추가하면 콘텍스트를 편하게 다룰 수 있다.
	useContext 훅을 사용해 콘텍스트에서 값을 얻을 수 있다.
*/
import { useContext } from "react"
import { ColorContext } from ".."
import Color from "./color"

export default function ColorListContext(){
	const {colors}=useContext(ColorContext)
	console.log(colors)
	const colorsArr=colors.colors
	if(!colorsArr.length) return <div>No Colors Listed. (Add a Color)</div>
	return (
		<div className="color-list">
			{
				colorsArr.map(color=><Color key={color.id}{...color}/>)
			}
		</div>
	)
}