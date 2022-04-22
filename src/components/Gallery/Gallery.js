import { useState } from "react";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

function Gallery(props) {
  const { pictures, title } = props;
  const { activeIndex, setActiveIndex } = useState(0);

  // let img = [];
  // pictures.map((currentPicture, index) =>
  //   img.push(<img src={currentPicture} alt={title} key={index} />)
  // );

  // const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <section className="gallery">
      <div className="container">
        <img
          // onClick={nextImgIndex}
          className="leftArrow"
          src={leftArrow}
          alt="left arrow"
        />
        {/* <img src={currentPicture} alt={title} className="gallery--image" key={index} /> */}
        <img
          // onClick={prevImgIndex}
          className="rightArrow"
          src={rightArrow}
          alt="right arrow"
        />
      </div>
    </section>
  );
}

export default Gallery;
