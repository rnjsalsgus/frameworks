import { Dialog, DialogContent, DialogTitle,DialogActions,Button,IconButton,Stack,TextField } from "@mui/material"
import { useState } from "react"
import { SERVER_URL } from "./constants"
import {Edit} from "@mui/icons-material"

function EditCar({fetchCars,data}){
	const[open,setOpen]=useState(false)
	const[car,setCar]=useState({
		brand:"",
		model:"",
		color:"",
		year:"",
		price:""
	})
	const handleClickOpen=()=>{
		console.log(data)
		setOpen(true)
	}
	const handleClose=()=>{
		setOpen(false)
	}
	const handleChange=(event)=>{
		setCar({...car,[event.target.name]:event.target.value})
	}
	// 자동차를 업데이트하고 모달 폼을 닫음
	const handleSave=()=>{
		updateCar(data.id)
		handleClose()
	}

	//자동차를 업데이트
	const updateCar=(link)=>{
		fetch(link,
			{
				method:"PUT",
				headers:{"content-Type":"application/json"},
				body:JSON.stringify(car)
			}
		)
		.then(response=>{
			if(response.ok){
				fetchCars();
			}
			else{
				alert("Something went wrong!")
			}
		})
		.catch(err=>console.error(err))
	}
	
	return (
		<div>
			<IconButton onClick={handleClickOpen}>
				<Edit color="info"></Edit>
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Edit car</DialogTitle>
				<DialogContent>
					<Stack spacing={1} mt={1}>
						<TextField
							label="Brand"
							name="brand"
							variant="standard"
							value={car.brand}
							onChange={handleChange}
						/>
					</Stack>
					<Stack spacing={1} mt={1}>
						<TextField
							label="Model"
							name="model"
							variant="standard"
							value={car.model}
							onChange={handleChange}
						/>
					</Stack>
					<Stack spacing={1} mt={1}>
						<TextField
							label="Color"
							name="color"
							variant="standard"
							value={car.color}
							onChange={handleChange}
						/>
					</Stack>
					<Stack spacing={1} mt={1}>
						<TextField
							label="Year"
							name="year"
							variant="standard"
							value={car.year}
							onChange={handleChange}
						/>
					</Stack>
					<Stack spacing={1} mt={1}>
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
export default EditCar