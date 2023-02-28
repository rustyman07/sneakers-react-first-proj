import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useRef } from "react";
import data from "./data";

const userData = data.map((item) => item);

function App() {
  const [quantity, setQuantity] = useState(0);
  const [addtoCart, setAddtoCart] = useState(0);
  const addCartRef = useRef();
  const addCart = () => {
    setAddtoCart((prev) => prev + quantity);
    setQuantity(0);
  };
  const add = () => {
    setQuantity((prev) => prev + 1);
  };
  const minus = () => {
    setQuantity((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  return (
    <>
      <Header
        quantity={quantity}
        data={userData}
        addCart={addCart}
        addtoCart={addtoCart}
        addCartRef={addCartRef}
      />
      <Main
        quantity={quantity}
        add={add}
        minus={minus}
        addCart={addCart}
        addCartRef={addCartRef}
      />
    </>
  );
}

export default App;
