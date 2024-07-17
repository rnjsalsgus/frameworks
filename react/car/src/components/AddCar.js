import { Dialog,DialogTitle,DialogContent, DialogActions,Button,TextField ,Stack} from "@mui/material"
import { useState} from "react"
import { SERVER_URL } from "./constants"
import Transition from "./DownSlide"
function AddCar({fetchCars}){
	const [open,setOpen]=useState(false)
	const [car,setCar]=useState({
		brand:"",
		model:"",
		color:"",
		year:"",
		price:""
	})

	// 대화상자 폼을 닫고 여는 두 함수를 추가 해야한다.
	const handleClickOpen=()=>{
			setOpen(true)
	}
	const handleClose=()=>{
		setOpen(false)
		setCar({
			brand:"",
			model:"",
			color:"",
			year:"",
			price:""
		})
	}
	const handleChange=(event)=>{
		setCar({...car,[event.target.name]:event.target.value})
	}

	// 새로운 자동차 추가
	const addCar=(car)=>{
		fetch(SERVER_URL+'/api/cars',
			{
				method:"POST",
				headers:{"content-Type":"application/json"},
				body:JSON.stringify(car)
			}
		)
		.then(response=>{
			if(response.ok){
				fetchCars();
			}
		})
	}
	// 자동차를 저장하고 모달 폼을 닫음
	const handleSave=()=>{
		addCar(car)
		handleClose()
	}
	
	return(
		
		<div>
			<Button variant="contained" onClick={handleClickOpen}>New Car</Button>
			<Dialog 
				open={open} 
				onClose={handleClose}
				TransitionComponent={Transition}
				>
				<DialogTitle>New Car</DialogTitle>
				<DialogContent>
					<Stack spacing={1}mt={1}>
						<TextField
							label="Brand"
							name="brand"
							variant="standard"
							value={car.brand}
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
						<TextField
							label="Model"
							name="model"
							variant="standard"
							value={car.model}
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
						<TextField
							label="Color"
							name="color"
							variant="standard"
							value={car.color}
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
						<TextField
							label="Year"
							name="year"
							variant="standard"
							value={car.year}
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
						<TextField
							label="Price"
							name="price"
							variant="standard"
							value={car.price}
							onChange={handleChange}
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSave}>Save</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
export default AddCar