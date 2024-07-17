import {useState} from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material"
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';

  const AddStudentIcon=({fetchStudents})=>{
	const [open,setOpen]=useState(false)
	const [student,setStudent]=useState(
		{
			stuId:"",
			name:"",
			major:"",
			phone:"",
			addr:""
		}
	)

	const handleClickOpen=()=>{
		setOpen(true)
	}
	const handleClose=()=>{
		setOpen(false)
		setStudent({
			stuId:"",
			name:"",
			major:"",
			phone:"",
			addr:""
		})
	}
	const handleChange=(e)=>{
		setStudent({...student,[e.target.name]:e.target.value})
	}
	const addStudent=(student)=>{
		if(window.confirm(`${student.name} 학생의 학생 정보를 추가하시겠습니까?`)){		
			fetch("http://localhost:8080/api/students",
			{
				method:"POST",
				headers:{"content-Type":"application/json"},
				body:JSON.stringify(student)
			}
			)
			.then(res=>{
				if(res.ok){
					fetchStudents();
				}
			})
		}
	}
	const handleSave=()=>{
		addStudent(student)
		handleClose()
		
	}
	
	return(
		<div>
			<PostAddSharpIcon color="info" variant="outlined" onClick={handleClickOpen}/>
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle align="center">ADD STUDENT</DialogTitle>
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
					</Stack>
					<Stack>
						<TextField 
							variant="standard"
							label="Name" 
							name="name"
							placeholder="이름"
							value={student.name}	
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
						<TextField 
							variant="standard" 
							label="Major" 
							name="major"
							placeholder="학과"
							value={student.major}
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
						<TextField 
							variant="standard" 
							label="Phone" 
							name="phone"
							placeholder="전화번호"
							value={student.phone}	
							onChange={handleChange}
						/>
					</Stack>
					<Stack>
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
					<Button onClick={handleSave}>Save</Button>
				</DialogActions>
			</Dialog>
			
		</div>
		
	)
}
export default AddStudentIcon