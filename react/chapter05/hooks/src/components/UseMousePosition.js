/* 마우스 위치를 추적하는 경우 */

import {useState,useLayoutEffect} from "react"

export default function useMousePosition(){
	const [x,setX]=useState(0)
	const [y,setY]=useState(0)

	const setPosition=({x,y})=>{
		setX(x)
		setY(y)
	}
	useLayoutEffect(()=>{
		window.addEventListener("mousemove",setPosition)
		return ()=>window.removeEventListener("mousemove",setPosition)
	})
	return (
		<>
			<h1>{x},{y}</h1>
		</>
	)
}