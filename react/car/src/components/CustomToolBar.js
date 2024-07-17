
// 데이터를 CSV로 내보내는 기능을 구현하기 위해 임포트
import {GridToolbarContainer,GridToolbarExport,gridClasses } from "@mui/x-data-grid"

function CustomToolBar(){
	return(
		<GridToolbarContainer className={gridClasses.GridToolbarContainer}>
			<GridToolbarExport/>
		</GridToolbarContainer>
	)
}
export default CustomToolBar