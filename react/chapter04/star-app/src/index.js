import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';
import AppContext from "./AppContext"
import ColorProvider from './ColorProvider';
/* 
	리액트 콘텍스트
	트리 루트의 한 위치에 상태를 관리하는 패턴으로 만들었다.상태를 프롭을 통해
	 컴포넌트 트리의 위아래로 전달할 수 있다는 사실은 리액트 개발자들에게 
	 필수 통과 의례같은 것. 즉 모든 리액트 개발자는 어떻게 상태를 양방향으로
	 전달할 수 있는지 알아야만 한다.
	하지만 리액트가 진화하고 컴포넌트 트리가 커짐에 따라, 상태를 한 군데 유지
	한다는 원칙을 따르는 것이 점점 비현실적이 되기 시작. 복잡한 애플리케이션에서
	수많은 개발자가 상태를 한 위치에 유지하기는 어렵다. 상태를 십여개의 노드를 거쳐
	트리의 위나 아래로 전달하는 과정은 지겹고 버그 발생도 쉽다.
	상태 데이터를 그 데이터가 필요한 컴포넌트에 도달할 때까지 프롭 형태로 모든 중간
	 컴포넌트를 거쳐서 전달하는 과정은 지하철을 타고 가는 것과 같다.
	지하철을 타면 중간의 모든 역을 거쳐야 하고 최종 목적지에 도착하기 전까지는 지하철
	 에서 내리지 않는다.
	택시를 타고 가는 것이 좀 더 효율적일 수 있다. 이런 방법을 택하면 중간에 모든 역을
	 통과할 필요가 없다.
	중간 역을 넘어서 바로 목적지로 갈 수 있다.
	리액트에서 콘텍스트는 데이터를 위한 택시와 같다. 콘텍스트 프로바이더를 만들어서
	 데이터를 리액트 콘텍스트에 넣을 수 있다. 콘텍스트 프로바이더는 데이터가 택시를 타는
	 출발지라고 할 수 있다. 그리고 콘텍스트 프로바이더는 데이터 허브이기도 하다.
	 모든 택시는 콘텍스트 프로바이더에서 출발해 다른 목적지로 간다. 각 목적지는 콘텍스트
	 소비자라고 한다.
*/

/* 콘텍스트에 색 넣기
	리액트에서 콘텍스트를 사용하려면 먼저 콘텍스트 프로바이더에게 데이터를 넣고, 
	 프로바이더를 컴포넌트 트리에 추가해야 한다.
	리액트에게 새로운 콘텍스트 객체를 만들 때 쓰는 createContext라는 함수가 있다.
	 만들어진 콘텍스트 객체에는 콘텍스트 Provider와 콘텍스트 Consumer라는 2가지
 	 컴포넌트가 있다.
	color-data.json 파일에서 찾은 디폴트 색 정보를 콘텍스트에 넣기. 애플리케이션
	진입점인 index.js 파일에 콘텍스트를 추가
*/

/* 
	createContext를 사용해 새로운 리액트 콘텍스트를 만들고 ColorContext라 
	정의
*/


export const ColorContext=createContext()

/* 이 색 콘텍스트에는 ColorContext.Provider와 ColorContext.Cunsumer라는
	2가지 컴포넌트가 들어있다.
	색을 상태에 넣기 위해서는 프로바이더를 사용해야 한다.
	Provider에 value를 설정하면 콘텍스트에 데이터를 추가할 수 있다.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
		<ColorProvider>
     <AppContext />
		</ColorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
