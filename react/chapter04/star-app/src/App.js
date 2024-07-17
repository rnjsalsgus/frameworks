import "./App.css"

/* 재사용성을 높이기 위한 리팩터링
	1.style속성을 생각해 볼 수 있다.
	2.이 속성을 사용하면 css 스타일을 엘리먼트에 추가할 수 있다.
*/
/* 
	컴포넌트 트리 안의 상태
	모든 컴포넌트에 상태를 넣어야 하는 경우 모든 컴포넌트에 상태를
	 넣는 것은 좋지 않음.
	상태 데이터가 너무 많은 컴포넌트에 분산되면 버그를 추적하거나 
	 애플리케이션의 기능을 변경하기가 어려워진다. 이런 일이 
	 어려워지는 이유는 컴포넌트 트리에서 어느 부분에 상태가
	 존재하는지 제대로 알기 어려워지기 때문
	애플리케이션의 상태나 어떤 특성의 상태를 한곳에서 관리할 수 
	 있으면 상태를 이해하기가 더 쉬워진다.
	상태를 한 곳에서 관리하는 방법이 몇가지 있다.
	1.상태를 컴포넌트 트리에 저장하고, 자식 컴포넌트들에게
	 프롭으로 전달하는 방법
*/
/* 
	색의 목록을 관리하는 작은 애플리케이션 생성
	이 앱은 사용자가 목록에 있는 색에 대해 별점과 제목을
	 부여할 수 있도록 한다.
*/
/* 
	App 컴포넌트는 우리 앱에서 상태를 저장할 유일한 컴포넌트
*/
/* 
	App 컴포넌트의 상태에 저장된 colors의 색 평점을 변경하려면,
	onRemoveColor에 대해 적용했던 방식을 그대로 onRate이벤트에 적용
	먼저 클릭된 각 별ㄹ부터 새평점을 수집해서 StarRating의 부모에 전달
*/
import {useState} from "react";
import colorData from "./color-data.json"
import ColorList from "./components/ColorList.js"
import AddColorCustom from "./components/AddColorCustom.js";

/* 색을 상태에 추가하기
	title과 color의 값을 onNewColor함수를 통해 부모 컴포넌트에게 전달
*/
function App() {
  const [colors,setColors]=useState(colorData.color);
	let colorCount=colors.length
	return (
    <>
			<AddColorCustom onNewColor={(title,color)=>{
				const newColor=[
					{
						"id":colorCount++,
						"title":title,
						"color":color,
						"rating":0
					},
					...colors
				]
				setColors(newColor)
			}}
		/>
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          /* 매개 변수로 넘어온 id 값을 사용해 색을 제거 */
          const newColor = colors.filter((color) => color.id !== id);
          setColors(newColor);
        }}
        onRateColor={(id, rating) => {
          /* 배열에서 id값이 일치하는 것을 찾아 rating값을 변경하여
			새 배열로 만들고 새 배열을 훅을 통해 대입 */
          const newColor = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColor);
        }}
      />
    </>
  ); 
}

export default App;
