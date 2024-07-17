import {useColors} from "../ColorProvider"
import ColorWithContext from "./ColorWithContext"

export default function ColorListContextHook(){
	const {colors}=useColors()
	const colorsArr=colors
	if(!colorsArr.length) return <div>No Colors Listed. (Add a Color)</div>
	return (
		<div className="color-list">
			{
				colorsArr.map(color=><ColorWithContext key={color.id}{...color}/>)
			}
		</div>
	)
}