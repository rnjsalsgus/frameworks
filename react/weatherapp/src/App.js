import './App.css';
import {useState,useEffect} from "react"

function App() {
	const[temp,setTemp]=useState("")
	const[desc,setDesc]=useState("")
	const[icon,setIcon]=useState("")
	const[isReady,setReady]=useState("")

	 /* useEffect 훅 함수에서 fetch로 빈 배열을 두 번째 인수로 전달하여 수행하게 한다.
		즉, fetch는 첫 번째 렌더링 이후 한 번 호출된다. 응답이 성공하면 날씨 데이터를
		상태에 저장하고 isReady상태를 true로 변경한다.
 */
	useEffect(()=>{
		fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.15&lon=129.05&units=metric&appid=79aa92c51aaa5884bd61ce5c7a6a4c61")
			.then(result=>result.json())
			.then(jsonResult=>{
				setTemp(jsonResult.main.temp)
				setDesc(jsonResult.weather[0].main)
				setIcon(jsonResult.weather[0].icon)
				setReady(true)
			})
			.catch(err=>console.error(err))
	},[])
	if(isReady){
		return (
			<div className="App">
				<p>Temperature: {temp} &#8451;</p>
				<p>Description: {desc}</p>
				<img style={{backgroundColor:"skyblue"}}src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
				
			</div>
		);
	}
	else{
		return <div className="App">Loading...</div>
	}
}

export default App;
