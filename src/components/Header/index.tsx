import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ThemeButton } from "../../styles/Buttons";
import { Container } from "../../styles/Global";
import { StyledHeader } from "./style";
import { FiLogOut } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { CardContext } from "../../context/CardContext";
import { useForm } from "react-hook-form";

interface iSearchProdutcs {
  search: string;
}

const Header = () => {
  const { setModalIsOpen, productsList, setProductsList } =
    useContext(CardContext);

  const logout = () => {
    window.localStorage.clear();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const searchProducts = (data: iSearchProdutcs) => {
    const newProductList = productsList.filter(
      (product) => product.category.toLowerCase() == data.search.toLowerCase()
    );
    setProductsList(newProductList);
  };

  const { register, handleSubmit } = useForm<iSearchProdutcs>();

  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="Logo" />
        <nav>
          <form className="inputGroup" onSubmit={handleSubmit(searchProducts)}>
            <input
              placeholder="Digitar pesquisa"
              {...register("search")}
            ></input>
            <ThemeButton
              buttonStyle="solid"
              buttonSize="sm"
              className="searchButton"
              type="submit"
            >
              Pesquisar
            </ThemeButton>
          </form>
          <div>
            <button className="cartButton" onClick={() => openModal()}>
              <TiShoppingCart />
            </button>
            <Link to="/login" onClick={() => logout()}>
              <FiLogOut />
            </Link>
          </div>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
