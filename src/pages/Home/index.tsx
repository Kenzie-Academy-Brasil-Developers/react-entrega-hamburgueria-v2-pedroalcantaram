import { useContext } from "react";
import Cart from "../../components/CartList";
import Header from "../../components/Header";
import { ModalCart } from "../../components/Modal";
import ProductsList from "../../components/ProductsList";
import { CardContext } from "../../context/CardContext";
import { Container } from "../../styles/Global";

const Home = () => {
  const { modalIsOpen } = useContext(CardContext);
  return (
    <>
      {modalIsOpen && (
        <ModalCart id="modalCart">
          <Cart />
        </ModalCart>
      )}
      <Header />
      <Container>
        <ProductsList />
      </Container>
    </>
  );
};

export default Home;
