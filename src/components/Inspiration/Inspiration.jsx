import React, { useState } from "react";
import "../Inspiration/Inspiration.css";

import roomImageOne from "../../assets/images/inspiration1.png";
import roomImageTwo from "../../assets/images/inspiration2.png";
import roomImageThree from "../../assets/images/inspiration3.png";

import nextArrow from "../../assets/images/arrow.png";

const Inspiration = () => {

  const roomData = [
    {
      roomImage: roomImageOne,
      roomName: "Bed Room",
      roomTitle: "Inner Peace",
    },
    {
      roomImage: roomImageTwo,
      roomName: "Dining Room",
      roomTitle: "Modern Dining",
    },
    {
      roomImage: roomImageThree,
      roomName: "Living Room",
      roomTitle: "Modern Living",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === roomData.length - 1 ? 0 : prev + 1
    );
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  const selectedRoom = roomData[currentIndex];

  const previewRoom =
    roomData[
      currentIndex === roomData.length - 1
        ? 0
        : currentIndex + 1
    ];

  return (
    <>
    <div className="container">

      {/* Left Side */}
      <div className="content">

        <h2>
          50+ Beautiful rooms <br /> inspiration
        </h2>

        <p>
          Our designer already made a lot of beautiful prototype of rooms
          that inspire you.
        </p>

        <button>Explore More</button>

      </div>


      {/* Right Side */}
      <div className="gallery">

        {/* Main Image */}
        <div className="card active">

          <img
            src={selectedRoom.roomImage}
            alt={selectedRoom.roomTitle}
          />

          <div className="card-content">

            <p>
              0{currentIndex + 1} — {selectedRoom.roomName}
            </p>

            <h3>
              {selectedRoom.roomTitle}
            </h3>

            <button
              className="arrow"
              onClick={nextSlide}
            >
              →
            </button>

          </div>

        </div>


        {/* Second Preview Image */}
        <div className="right-side">

          <div className="card-room">

            <img
              src={previewRoom.roomImage}
              alt={previewRoom.roomTitle}
            />

          </div>


          {/* Dots */}
          <div className="slider-controls">

            <div className="dots">

              {roomData.map((_, index) => (

                <span
                  key={index}
                  className={`dot ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => selectSlide(index)}
                ></span>

              ))}

            </div>


            {/* Next Button */}
            <button
              className="next-btn"
              onClick={nextSlide}
            >
              <img
                src={nextArrow}
                alt="Next"
              />
            </button>

          </div>

        </div>

      </div>
</div>
    </>
  );
};

export default Inspiration;