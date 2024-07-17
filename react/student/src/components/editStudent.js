import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Stack, Button} from "@mui/material"
import EditNoteIcon from '@mui/icons-material/EditNote';

function EditStudent({fetchStudents,data}){
	const [open,setOpen]=useState(false)
	const [student,setStudent]=useState({
		stuId:"",
		name:"",
		major:"",
		phone:"",
		addr:""
	})

	const handleClickOpen=()=>{
		setOpen(true)
		setStudent({
			stuId:data.row.stuId,
			name:data.row.name,
			major:data.row.major,
			phone:data.row.phone,
			addr:data.row.addr
		})
	}
	const handleClose=()=>{
		setOpen(false)
	}
	const handleChange=(event)=>{
		setStudent({...student,[event.target.name]:event.target.value})
	}
	
	const updateStudent=(url)=>{
		if(window.confirm(`${student.name} 학생의 정보를 수정하시겠습니까?`)){
			fetch(url,{
				method:"PUT",
				headers:{"content-Type":"application/json"},
				body:JSON.stringify(student)
			})
			.then(res=>{
				if(res.ok){
					fetchStudents();
				}
			})
			.catch(err=>console.log(err))
		}
	}
	
	const saveStudent=()=>{
			updateStudent(data.id)
			handleClose()
	}
	return(
		<div>
			<IconButton onClick={handleClickOpen}>
				<EditNoteIcon fontSize="large" color="info"/>
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle align="center">EDIT STUDENT</DialogTitle>
				<DialogContent>
					<Stack>
						<TextField
							variant="standard"
							label="Stu-ID" 
							name="stuId"
							placeholder="학번"
							value={student.stuId}	
							onChange={handleChange}
						/>
						<TextField
							variant="standard"
							label="Name" 
							name="name"
							placeholder="이름"
							value={student.name}	
							onChange={handleChange}
						/>
						<TextField
							variant="standard"
							label="Major" 
							name="major"
							placeholder="학과"
							value={student.major}	
							onChange={handleChange}
						/>
						<TextField
							variant="standard"
							label="Phone" 
							name="phone"
							placeholder="전화번호"
							value={student.phone}	
							onChange={handleChange}
						/>
						<TextField
							variant="standard"
							label="Address" 
							name="addr"
							placeholder="주소"
							value={student.addr}	
							onChange={handleChange}
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={saveStudent}>Edit</Button>
				</DialogActions>
			</Dialog>
			</div>
	)
}

export default EditStudent