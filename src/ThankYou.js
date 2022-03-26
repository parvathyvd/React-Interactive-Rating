import React from "react";

const ThankYou = ({rating}) => {
  return (
        <div className="thank-you">
          <img src="./images/illustration-thank-you.svg" alt="" />
          <span className="rating__text">You selected {rating} out of 5</span>
          <h2>Thank You!</h2>
           <p className="text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        </div>
    
  );
};

export default ThankYou;
