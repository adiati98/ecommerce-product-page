import ProductImages from "./ProductImages";
import close from "../assets/images/icon-close.svg";

const ImageModal = ({ imageModal, setIsOpened }) => {
  return (
    <div className="my-modal">
      <div className="my-modal-content">
        <button className="close-btn mb-3" onClick={() => setIsOpened(false)}>
          <img src={close} alt="close" />
        </button>
        <ProductImages images={imageModal} modal />
      </div>
    </div>
  );
};

export default ImageModal;
