import { useState } from "react";
import "./App.css";

function App() {
  const [hover, setHover] = useState(null);
  const [detail, setDetail] = useState(null);
  const elementList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="container">
        {elementList.map((element) => (
          <div
            className={`element-${element}`}
            onMouseEnter={() => {
              setHover(element);
            }}
            onMouseLeave={() => {
              setHover(null);
            }}
            onClick={() => {
              setDetail(element);
            }}
          >
            <img src={hover ? `images/${element}.png` : `images/${element}-${element}.png`} alt="" />
          </div>
        ))}
      </div>
      <div
        className="modal"
        style={{ display: detail ? "flex" : "none" }}
        onClick={() => {
          setDetail(null);
        }}
      >
        <div className="modal-container">
          <img src={`images/${detail}--2.png`} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
