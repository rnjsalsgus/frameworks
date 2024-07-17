import {useState,useEffect} from "react"
import {DataGrid} from "@mui/x-data-grid"
import CustomNoRowsOverlay from "./customNoRowOverlay"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddStudent from "./addStudent";
import { Stack,Snackbar } from "@mui/material";
import AddStudentIcon from "./addStudentIcon";
import EditStudent from "./editStudent";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "150px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));	

function StudentList(){

	function DelButton(props) {
		const { numSelected } = props;
	
		return (
			
			<Toolbar
				sx={{
					pl: { sm: 2 },
					pr: { xs: 1, sm: 1 },
					...(numSelected > 0 && {
						bgcolor: (theme) =>
							alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
					}),
				}}
			>
				{numSelected > 0 ? (
					<Typography
						sx={{ flex: '1 1 100%' }}
						color="inherit"
						variant="subtitle1"
						component="div"
					>
						{numSelected} selected
					</Typography>
				) : (
					<Typography
						sx={{ flex: '1 1 100%' }}
						variant="h6"
						id="tableTitle"
						component="div"
					>
						Student List
					</Typography>
				)}
	
				{numSelected > 0 ? (
					<Tooltip title="Delete">
						<IconButton onClick={()=>onDelClick(selectedList)}>
							<DeleteIcon color="warning"/>
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="Post">
						<IconButton>
							<AddStudentIcon fetchStudents={fetchStudents}/>
						</IconButton>
					</Tooltip>
				)}
			</Toolbar>
		);
	}
	const [open,setOpen]=useState(false);
	
	const onDelClick=(url)=>{
		if(window.confirm(`${url.length}명의 학생 정보를 삭제하시겠습니까?`)){
			for(let i=0;i<=url.length;i++){
				fetch(url[i],{method: "delete"})
					.then((res) => {
						if (res.ok) {
							fetchStudents()
							setOpen(true)
						}
					})
					.catch((err) => console.error(err));
			};
		}
		}
	const columns=[
		{field:"stuId",headerName:"STU-ID",width:200},
		{field:"name",headerName:"NAME",width:200},
		{field:"major",headerName:"MAJOR",width:200},
		{field:"phone",headerName:"PHONE",width:200},
		{field:"addr",headerName:"ADDRESS",width:200},
		{
			field:"edit",
			headerName:"",
			sortable:false,
			filterable:false,
			renderCell:(row)=>{
				return(
					<EditStudent
						data={row}
						fetchStudents={fetchStudents}
					/>
				)
			}
		}
	]
	let [students,setStudents]=useState([])
	const fetchStudents=()=>{
		fetch("http://localhost:8080/api/students")
			.then(res=>res.json())
			.then(data=>setStudents(data._embedded.students))
			.catch(err=>console.error(err))
	}
	useEffect(()=>{
		fetchStudents()
	},[])
	
	const [selectedList,setSelectedList]=useState([])
	const [searchInput,setSearchInput]=useState([])
	const [filterResult,setFilterResult]=useState([])
	const [enter,setEnter]=useState([])

	const handleChange=(e)=>{
		setSearchInput(e.target.value)
	}

	const searchItem=(searchValue)=>{
		handleChange(searchValue)
		if (searchInput !== "") {
				const filterData=students.filter((item)=>{
				return Object.values(item).join('').includes(searchInput)
			})
			setFilterResult(filterData)
		}
		else{
			setFilterResult(students)
		}
	}
	return (
    <div>
      <DelButton numSelected={selectedList.length} />
      {enter.key === "Enter"  ? (
        <DataGrid
          autoHeight
          rows={filterResult}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ noRowsOverlay: CustomNoRowsOverlay }}
          sx={{ "--DataGrid-overlayHeight": "300px" }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowId={(row) => row._links.self.href}
          onRowSelectionModelChange={(curRowSelected) => {
            setSelectedList(curRowSelected);
					
          }}
        />
      ) : (
        <DataGrid
          autoHeight
          rows={students}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ noRowsOverlay: CustomNoRowsOverlay }}
          sx={{ "--DataGrid-overlayHeight": "300px" }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          getRowId={(row) => row._links.self.href}
          checkboxSelection
          onRowSelectionModelChange={(curRowSelected) => {
            setSelectedList(curRowSelected);
          }}
        />
      )}
      <Stack mt={2}>
        <AddStudent fetchStudents={fetchStudents} />
      </Stack>

      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        message="삭제되었습니다."
      />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase 
					placeholder="Search..."
					onKeyDown={(e)=>searchItem(e)}
					onKeyUp={(e)=>setEnter(e)}
				/>
      </Search>
    </div>
  );
}
export default StudentList
