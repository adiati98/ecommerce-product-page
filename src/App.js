import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage.jsx";
import CartModal from "./components/CartModal.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [purchased, setPurchased] = useState(null);

  return (
    <div className="App">
      <Navbar setCartIsOpened={setCartIsOpened} purchased={purchased} />
      {cartIsOpened && (
        <CartModal purchased={purchased} updatePurchased={setPurchased} />
      )}
      <ProductPage updatePurchased={setPurchased} />
      <Footer />
    </div>
  );
}

export default App;
