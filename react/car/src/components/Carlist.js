import { useState,useEffect } from "react";
import { SERVER_URL } from "./constants";
import { DataGrid } from "@mui/x-data-grid"
import { Snackbar,Stack,IconButton} from "@mui/material"
import { Delete } from "@mui/icons-material"
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import CustomToolBar from "./CustomToolBar";


function Carlist(){
	// REST API에서 가져온 자동차 정보를 담을 상태 객체가 필요
	// 비어 있는 배열을 기본값으로 cars라는 상태를 선언
	const [cars,setCars]=useState([])
	/* SnackBar컴포넌트의 open프롭 값은 Boolean이며, 이 값이 true이면
		컴포넌트가 표시된다. SnackBar 컴포넌트의 표시 여부를 처리하기 위해
		open이라는 상태는 선언한다.
	*/
	const [open,setOpen]=useState(false)
	/* useEffect 훅에서 fetch를 실행
		fetch는 web server에 요청을 보내는 함수 - AJAX
		두 번째 인수로 비어있는 배열을 전달하므로 fetch는 
		 한번만 실행 JSON응답 데이터에 있는 자동차 데이터는 cars상태에 저장 */
	
	useEffect(()=>{
		fetchCars()
	},[])
	
	/* ag-grid 컴포넌트는 데이터 표의 열도 정의해야 한다. 여기에는
 		field는 자동차 객체의 속성이다. 열의 제목은 headerName속성으로
 		설정할 수 있다. 열의 너비도 여기에서 설정 가능하다. */
	const columns=[
		{field:"brand",headerName:"Brand",width:200},
		{field:"model",headerName:"Model",width:200},
		{field:"color",headerName:"Color",width:200},
		{field:"year",headerName:"Year",width:150},
		{field:"price",headerName:"Price",width:150},
		{
			field:"delete",
			headerName:"",
			sortable:false,
			filterable:false,
			/* 셀에 더 복잡한 내용을 넣어야 할 때는 셀의 내용이
				렌더링되는 방법을 정의하는 renderCell프롭을 이용 */
			// renderCell로 button요소를 추가
			renderCell:(row)=>
				<IconButton onClick={()=>onDelClick(row.id)}>
					<Delete color="warning"/>
				</IconButton>
			
		},
		{
			field:"edit",
			headerName:"",
			sortable:false,
			filterable:false,
			renderCell:(row)=>
				<EditCar
					data={row}
					fetchCars={fetchCars}
				/>
		}
	]
	const onDelClick=(url)=>{
		/* delete버튼을 눌렀을 때 확인 대화상자를 표시하는 기능이 있으면
			자동차를 실수로 삭제하는 일이 줄어든다.
			window객체의 confirm메소드로 이 기능을 구현 */
		if(window.confirm("Are you sure to delete?")){	
			// console.log(url)
			fetch(url,{method:"delete"})
			// 삭제 후 새로운 목록으로 렌더링
			.then((response)=>{
				if(response.ok){		
					fetchCars()
					setOpen(true)
				}
				else{
					alert('Something went wrong!')
				}
			})
			.catch(err=>console.error(err))
		}
	}
		
	// 서버 주소 상수에서 목록을 가져오는 함수
	const fetchCars=()=>{
		fetch(SERVER_URL+"/api/cars")
			.then(response=>response.json())
			.then(data=>setCars(data._embedded.cars))
			.catch(err=>console.error(err))
	}
	return (
	<div>
		<div style={{width:"100%"}}>
			<Stack mt={2} mb={2}>
				<AddCar fetchCars={fetchCars}/>
			</Stack>
			{ /* DataGrid
			데이터표의 데이터 원본은 fetch()로 읽어 들인 cars상태이며, 이는 rows 프롭으로 정의된다.
			데이터 표 컴포넌트를 이용하려면 모든 행에 getRowId 프롭으로 고유한 ID속성을 정의해야 한다.
			*/ }
			<DataGrid
				columns={columns}
				rows={cars}
				getRowId={row=>row._links.self.href}
				// 표에서 아무 행이나 클릭하면 해당 행이 선택된다.
				// 표의 disableRowSelectionOnClick프롭을 true로 설정하면
				// 이 동작을 비활성화할 수 있다.
				disableRowSelectionOnClick={true}
				components={{toolbar:CustomToolBar}}
		/>
		<Snackbar 
			/* autoHideDuration프롭은 onClose함수가 자동으로 호출되고
			메시지가 사라지는 시간을 밀리초 단위로 정의한다.
			message프롭은 표시될 메시지를 정의한다. */
			open={open}
			autoHideDuration={1500}
			onClose={()=>setOpen(false)}
			message="Car deleted"
			/>
		</div>
		{/* <table>
			<tbody>
				{cars.map((car,index)=>
						<tr key={index}c>
							<td>{car.brand}</td>
							<td>{car.model}</td>
							<td>{car.color}</td>
							<td>{car.year}</td>
							<td>{car.price}</td>
							<td>
								<button onClick={()=>onDelClick(car._links.self.href)}>Delete</button>
							</td>
						</tr>
					)}
			</tbody>
		</table> */}
	</div>
	)
}

export default Carlist;