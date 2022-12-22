import React from "react";
import { StyledCart } from "./style";
import {
  ThemeParagraphy,
  ThemeSpan,
  ThemeTitle,
} from "../../styles/Typography";
import CartCard from "./CartCard";
import { ThemeButton } from "../../styles/Buttons";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

const Cart = () => {
  const { currentSale, setCurrentSale } = useContext(CardContext);

  const totalPrice = currentSale.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    0
  );

  return (
    <StyledCart>
      <div className="headerCart">
        <ThemeTitle color="--gray-0">Carrinho de compras</ThemeTitle>
      </div>
      <ul className="displayCart">
        {currentSale.length ? (
          currentSale.map((product) => (
            <CartCard product={product} key={product.id} />
          ))
        ) : (
          <>
            <ThemeTitle color="--gray-100">Sua sacola está vazia</ThemeTitle>
            <ThemeSpan color="--gray-50">Adicione itens</ThemeSpan>
          </>
        )}
      </ul>
      <div className="totalContainer">
        <div className="totalInfo">
          <ThemeParagraphy color="--gray-100">Total</ThemeParagraphy>
          <ThemeParagraphy color="--gray-50">
            R$ {totalPrice.toFixed(2)}
          </ThemeParagraphy>
        </div>
        <ThemeButton
          onClick={() => setCurrentSale([])}
          buttonSize="lg"
          buttonStyle="outline"
        >
          Remover todos
        </ThemeButton>
      </div>
    </StyledCart>
  );
};

export default Cart;
