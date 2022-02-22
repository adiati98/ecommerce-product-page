//data
import { useState } from "react";
import data from "../data";
import ImageModal from "./ImageModal";
//components
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

const ProductPage = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main>
      {isOpened && (
        <ImageModal imageModal={data.productImages} setIsOpened={setIsOpened} />
      )}
      <ProductImages images={data.productImages} setIsOpened={setIsOpened} />
      <ProductDetails item={data} />
    </main>
  );
};

export default ProductPage;
