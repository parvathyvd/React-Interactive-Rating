import React, { useState } from 'react';

const Rating = ({onSubmit, rating, setRating}) => {
    const [classNameActive, setClassNameActive] = useState(false);
    const onButtonClickHandler = (e) => {
        setRating(e.target.value);
        setClassNameActive(true)
    }
    const renderNumbers = [1,2,3,4,5];
    const renderRatings = renderNumbers.map(num => (
        <button value={num} key={num} className={(classNameActive && num === +rating) ? 'app__rating-btn active' : 'app__rating-btn'}   onClick={onButtonClickHandler}>
          {num}
        </button>
      ))
    
    return (
       <>
       <div className="app__star">
          <i className="fa-solid fa-star"></i>
        </div>
        <h1>How did we do?</h1>
        <p className="app__description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="app__ratings">
         {renderRatings}
        </div>
        <button className="submit-btn" onClick={(e,rating)=>onSubmit(e,rating)}>
          Submit
        </button>
       </>
    );
};

export default Rating;