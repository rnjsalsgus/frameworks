import { useState,useEffect } from "react"
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";


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

function SearchName({students}){
	const [searchInput,setSearchInput]=useState([])
	const [filterResult,setFilterResult]=useState("")

console.log(students)
	const searchItem=(searchValue)=>{
		setSearchInput(searchValue)
		if (searchInput !== "") {
			const filterData=students.filter((item)=>{
				return Object.values(item).join('').includes(searchInput)
			})
			setFilterResult(filterData)
		}
		else{
			setFilterResult(students)
			// console.log(students)
		}
	}
	
	return (
		<div>
			<input 
				type="search"
				placeholder="Search..."
				onKeyDown={(event)=>searchItem(event.target.value)}
			/>
		</div>
	)
}
export default SearchName