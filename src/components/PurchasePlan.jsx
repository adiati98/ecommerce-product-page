import shoppingCartWhite from "../assets/images/icon-cart-white.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

import { useState } from "react";

const PurchasePlan = ({
  updatePurchased,
  title,
  discountedPrice,
  thumbnail,
  thumbnailAltText,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const handleSubmit = () => {
    updatePurchased((prevState) => ({
      ...prevState,
      quantity,
      title,
      discountedPrice,
      thumbnail,
      thumbnailAltText,
    }));
    setQuantity(0);
  };

  return (
    <div className="d-flex justify-content-center flex-column flex-sm-row">
      <div className="d-flex quantity  me-2">
        <button className="purchase-btn" onClick={decreaseQuantity}>
          <img src={minus} alt="minus" />
        </button>
        <span className="purchase-btn text-center fill">{quantity}</span>
        <button className="purchase-btn" onClick={increaseQuantity}>
          <img src={plus} alt="plus" />
        </button>
      </div>
      <button className="orange-btn" onClick={handleSubmit}>
        <img src={shoppingCartWhite} alt="Shopping cart icon" /> Add to chart
      </button>
    </div>
  );
};

export default PurchasePlan;
