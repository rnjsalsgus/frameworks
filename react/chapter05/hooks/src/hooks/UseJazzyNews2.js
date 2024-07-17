/* 
	useJazzyNews hook을 개선. 새로운 post가 들어올 때마다
	 newPostChimePlay()를 호출. 이 hook에서 posts는 배열. 따라서 
	 useMemo를 사용해 배열의 값을 메모화해야 한다.
*/

import {useState,useEffect,useMemo} from "react"
const newsFeedSubscribe=(addPost)=>{
	addPost({
			"id":"0",
			"title":"news title 01",
			"content":"news content 01"
	})
	addPost({
			"id":"1",
			"title":"news title 02",
			"content":"news content 02"
	})
}
const welcomeChimePlay=()=>{
	console.log("환영의 벨을 울린다.")
}
const goodbyeChimePlay=()=>{
	console.log("이별의 벨을 울린다.")
}
const newsFeedUnsubscribe=()=>{
	console.log("뉴스 구독을 취소한다.")
}
const newPostChimePlay=()=>{
	console.log("알람이 울린다.")
}

export const useJazzyNews2=()=>{
	const [posts,setPosts]=useState([])
	const addPost=post=>setPosts(allPosts=>[post,...allPosts])
	const _posts=useMemo(()=>posts,[_posts])

	useEffect(()=>{
		newPostChimePlay();
	},[_posts])
	/* 이제 새 포스트가 도착할 때마다 useJazzyNews훅이 벨을 울린다.
		posts 배열이 바뀔 때마다 차임벨을 울리는 효과를 추가
	*/

	useEffect(()=>{
		welcomeChimePlay()
		return ()=>goodbyeChimePlay()
	},[])
	return posts
}