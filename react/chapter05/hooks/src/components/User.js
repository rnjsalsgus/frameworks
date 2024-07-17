/* 
	useReducer로 복잡한 상태 처리하기
	useReducer룰 사용하면 상태가 더 복잡해질 때 상태 갱신을 더
	 예측 가능하게 처리하는데 도움이 된다.
*/
import {useState,useReducer} from "react"

const firstUser={
	id:0,
	firstName:"Bill",
	lastName:"Wilson",
	city:"Missoula",
	state:"Montana",
	email:"bwilson@tncilsons.com",
	admin:"false"
}
/* 
	firstUser를 초기 상태로 설정한 User라는 컴포넌트가 있다. 이 컴포넌트는
	 적절한 데이터를 표시 해준다.
*/

export default function User(){
	// const [user,setUser]=useState(firstUser)
	// Reducer로 개선
	const [user,setUser]=
		useReducer((user,newDetails)=>({...user,...newDetails}),firstUser)
	return(
		<div>
			<h1>
				{user.firstName}{user.lastName}={user.admin?"Admin":"User"}
			</h1>
			<p>Email: {user.email}</p>
			<p>Location: {user.city},{user.state}</p>
			<button 
				onClick={()=>{
					/* firstUser의 상태를 덮어써서 {admin:true}만 있게 된다.
					상태를 관리할 때 일반적으로 이렇게 상태를 덮어쓰는 것이
					많이 하는 실수 */
					// setUser({admin:true})
					/* 현재 값을 사용자가 분리하고, admin값을 덮어쓰면 이런 일을
					방지할 수 있다. */
					// setUser({...user,admin:true})
					/* 코드의 모든 onClick에 대해 코드를 이런 식으로 바꿔야 하고
					이 과정에서 실수를 저지르기 쉽다.(예를 들어 다음 날 돌아와서
					onClick을 이렇게 작성해야 한다는 사실을 잊어버릴 수 있다). */
					setUser({admin:true})
				}}
			>
				Make Admin</button>
		</div>
	)
}