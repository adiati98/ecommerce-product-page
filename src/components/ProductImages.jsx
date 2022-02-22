import { useEffect, useState } from "react";
import nextArrow from "../assets/images/icon-next.svg";
import previousArrow from "../assets/images/icon-previous.svg";

const ProductImages = ({ images, setIsOpened, arrows }) => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[0].productPic);

  const moveToNextImage = () => {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const moveToPreviousImage = () => {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    setImage(images[index].productPic);
  }, [index, images]);

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
        {images.map((product) => (
          <img
            src={product.thumbnail}
            onClick={() => setImage(product.productPic)}
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
