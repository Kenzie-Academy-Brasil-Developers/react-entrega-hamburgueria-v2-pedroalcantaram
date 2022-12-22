import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import ProductCard from "./ProductCard";
import { StyledProductsList } from "./style";

const ProductsList = () => {
  const { productsList, addToCart } = useContext(CardContext);

  return (
    <>
      <StyledProductsList>
        <ul>
          {productsList.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </ul>
      </StyledProductsList>
    </>
  );
};

export default ProductsList;
