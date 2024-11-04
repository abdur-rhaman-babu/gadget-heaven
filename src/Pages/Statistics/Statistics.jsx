import { useState } from "react";
import ReactStars from "react-rating-stars-component";
const Statistics = () => {
const [star,setStar] = useState('')
  const ratingChanged = (newRating) => {
    setStar(newRating)
  };
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <p>{star}</p>
    </div>
  );
};

export default Statistics;
