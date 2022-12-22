import React from "react";
import { useContext } from "react";
import { CardContext, iProduct } from "../../../context/CardContext";
import { ThemeButton } from "../../../styles/Buttons";
import { ThemeSpan, ThemeTitle } from "../../../styles/Typography";
import { StyledCartCard } from "./style";

interface iCartCardProps {
  product: iProduct;
}

const CartCard = ({ product }: iCartCardProps) => {
  const { removeOnCart } = useContext(CardContext);
  const { name, category, id, img } = product;

  return (
    <StyledCartCard>
      <img src={img} alt={name} />
      <div>
        <ThemeTitle color="--gray-100">{name}</ThemeTitle>
        <ThemeSpan color="--gray-50">{category}</ThemeSpan>
      </div>
      <ThemeButton
        buttonStyle="outline"
        buttonSize="sm"
        onClick={() => removeOnCart(id)}
      >
        Remover
      </ThemeButton>
    </StyledCartCard>
  );
};

export default CartCard;
