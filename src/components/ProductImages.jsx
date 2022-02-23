import { useState } from "react";
import nextArrow from "../assets/images/icon-next.svg";
import previousArrow from "../assets/images/icon-previous.svg";

const ProductImages = ({ images, setIsOpened, arrows }) => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[0].productPic);

  const moveToNextImage = () => {
    if (index === 3) {
      return;
    } else {
      const newIndex = index + 1;
      setIndex(newIndex);
      setImage(images[newIndex].productPic);
    }
  };

  const moveToPreviousImage = () => {
    if (index === 0) {
      return;
    } else {
      const newIndex = index - 1;
      setIndex(newIndex);
      setImage(images[newIndex].productPic);
    }
  };

  return (
    <>
      {arrows && (
        <img
          src={previousArrow}
          alt="previous arrow"
          onClick={moveToPreviousImage}
        />
      )}
      <div>
        <img src={image} alt="" onClick={() => setIsOpened(true)} />
      </div>
      <div className="thumbnails">
        {images.map((product, index) => (
          <img
            key={product.id}
            src={product.thumbnail}
            onClick={() => {
              setImage(product.productPic);
              setIndex(index);
            }}
            alt=""
          />
        ))}
      </div>
      {arrows && (
        <img src={nextArrow} alt="next arrow" onClick={moveToNextImage} />
      )}
    </>
  );
};

export default ProductImages;
