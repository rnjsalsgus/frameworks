import Star from "./star.js";

const createArray = (length) => [...Array(length)];

// 상태가 없는 컴포넌트를 순수 컴포넌트라 한다.

function StarRating({totalStars=5,selectedStars=0,onRate=f=>f}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => 
        <Star
          key={i}
          selected={selectedStars > i}
					onSelect={()=>onRate(i+1)}
        />
      )}
      <p className="star-text">
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default StarRating;