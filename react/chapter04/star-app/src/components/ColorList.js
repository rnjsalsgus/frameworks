import Color from "./color.js"

// function onRemoveColor(id){
// 	console.log("ColorList onRemoveColor called",id)
// }


export default function ColorList({colors=[],onRemoveColor,onRateColor=f=>f}){
	if(!colors.length){
		return <h1>표시할 색이 없습니다.</h1>
	}
	return (
		<div>
			{colors.map(color=>(
				<Color 
					key={color.id}{...color}
					onRemove={onRemoveColor}	
					onRate={(id,rating)=>{onRateColor(id,rating)}}		
				/>
			))}
			{/* {colors.map(color=>{
				<section key={color.key}>
					<h1>{color.title}</h1>
					<div style={{height:"50px",
					backgroundColor:color}}>
					</div>
					<StarRating selecedStars={color.rating}/>
				</section>
			})} */}
		</div>
	)
}