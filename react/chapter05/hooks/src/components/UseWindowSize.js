/* 창의 크기가 바뀐 경우 엘리먼트의 너비와 높이는 얻고 싶은 경우에 사용 */

import {useState,useLayoutEffect} from "react"

export default function useWindowSize(){
	const [width,setWidth]=useState(0)
	const [height,setHeight]=useState(0)

	const resize=()=>{
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}
	useLayoutEffect(()=>{
		window.addEventListener("resize",resize)
		return ()=>window.removeEventListener("resize",resize)
	})
	return <h1>{width},{height}</h1>
}