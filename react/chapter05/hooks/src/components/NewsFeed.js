/* 뉴스 피드 커스텀 hook에는 뉴스 피드를 처리하는 모든 기능이 들어있다.
	이 기능을 다른 컴포넌트와 쉽게 공유할 수 있다는 뜻
*/

import { useJazzyNews } from "../hooks/CustomHooks";

export default function NewsFeed({url}){
	const posts=useJazzyNews()

	return (
		<>
			<h1>{posts.length} articles</h1>
			{posts.map(post=>(
				<div>
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</>
	)
}