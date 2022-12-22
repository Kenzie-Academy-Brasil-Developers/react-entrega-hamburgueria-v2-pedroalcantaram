import React from "react";
import { useContext } from "react";
import { CardContext, iProduct } from "../../../context/CardContext";
import { ThemeButton } from "../../../styles/Buttons";
import {
  ThemeParagraphy,
  ThemeSpan,
  ThemeTitle,
} from "../../../styles/Typography";
import { StyledCard } from "./style";

interface iProductCardProps {
  products: iProduct;
}

export const ProductCard = ({ products }: iProductCardProps) => {
  const { addToCart } = useContext(CardContext);
  const { name, category, price, img } = products;

  return (
    <StyledCard>
      <div className="imgInfo">
        <img src={img} alt="" />
      </div>
      <div className="cardInfo">
        <ThemeTitle color="--gray-100">{name}</ThemeTitle>
        <ThemeSpan color="--gray-50">{category}</ThemeSpan>
        <ThemeParagraphy color="--Color-primary">
          R${price.toFixed(2)}
        </ThemeParagraphy>
        <ThemeButton
          buttonStyle="solid"
          buttonSize="sm"
          onClick={() => addToCart(products)}
        >
          Adicionar
        </ThemeButton>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
