import {Home,About,Products} from "./Pages"
export default function Content({page}){
	if(page==="Home"){
		return <Home/>
	}else if(page==="About"){
		return <About/>
	}else if(page==="Products"){
		return <Products/>
	}

}