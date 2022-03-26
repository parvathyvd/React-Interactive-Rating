import { useState } from "react";
import "./App.css";
import Rating from "./Rating";
import ThankYou from './ThankYou';

function App() {
  const [openThankYou, setOpenThankYou] = useState(false);
  const [rating, setRating] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!rating){
      return
    }
    setOpenThankYou(true)
  };

  return (
    <>
     <main className="app">
      <div className="app__content">
       {!openThankYou && <Rating onSubmit={onSubmitHandler} rating={rating} setRating={setRating}/>}
        {openThankYou && <ThankYou rating={rating}/>}
      </div>
    </main>
    <footer>
    <div className="attribution">
    Challenge by <a  rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a  target="_blank" rel="noreferrer" href="https://www.frontendmentor.io/profile/parvathyvd">Parvathy Vazhoor</a>.
  </div>
    </footer>
    </>
   
  );
}

export default App;
