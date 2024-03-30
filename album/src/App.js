import { useState, useEffect } from "react";
import "./App.css";

const Album = () => {
  const [prevBtn, setPrevBtn] = useState(null);
  const [nextBtn, setNextBtn] = useState(null);
  const [book, setBook] = useState(null);
  const [paper1, setPaper1] = useState(null);
  const [paper2, setPaper2] = useState(null);
  const [paper3, setPaper3] = useState(null);

  const [currentLocation, setLocation] = useState(1);
  const maxLocation = 4;

  useEffect(() => {
    setPrevBtn(document.getElementById("prev-btn"));
    setNextBtn(document.getElementById("next-btn"));
    setBook(document.getElementById("book"));
    setPaper1(document.getElementById("p1"));
    setPaper2(document.getElementById("p2"));
    setPaper3(document.getElementById("p3"));
  }, []);

  const openBook = () => {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
  };

  const closeBook = (isAtBeginning) => {
    if (isAtBeginning) {
      book.style.transform = "translateX(0%)";
    } else {
      book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
  };

  const toPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          paper1.classList.remove("flipped");
          paper1.style.zIndex = 3;
          break;
        case 3:
          paper2.classList.remove("flipped");
          paper2.style.zIndex = 2;
          break;
        case 4:
          openBook();
          paper3.classList.remove("flipped");
          paper3.style.zIndex = 1;
          break;
        default:
          throw new Error("unkown state");
      }

      setLocation((prevLocation) => prevLocation - 1);
    }
  };

  const toNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          paper1.classList.add("flipped");
          paper1.style.zIndex = 1;
          break;
        case 2:
          paper2.classList.add("flipped");
          paper2.style.zIndex = 2;
          break;
        case 3:
          paper3.classList.add("flipped");
          paper3.style.zIndex = 3;
          closeBook(false);
          break;
        default:
          throw new Error("unkown state");
      }
      setLocation((prevLocation) => prevLocation + 1);
    }
  };

  return (
    <div className="album-container">
      <button id="prev-btn" onClick={toPrevPage}>
        Prev Button
      </button>

      <div id="book" className="book">
        <div id="p1" className="paper">
          <div className="front">
            <div id="f1" className="front-content">
              <h1>Album front 1</h1>
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <h1> Back 1</h1>
            </div>
          </div>
        </div>

        <div id="p2" className="paper">
          <div className="front front2">
            <div id="f2" className="front-content">
              Front 2
            </div>
          </div>
          <div className="back back2">
            <div id="b2" className="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>

        <div id="p3" className="paper">
          <div className="front front3">
            <div id="f3" className="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back back3">
            <div id="b3" className="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>

      <button id="next-btn" onClick={toNextPage}>
        Next Button
      </button>
    </div>
  );
};

export default Album;
