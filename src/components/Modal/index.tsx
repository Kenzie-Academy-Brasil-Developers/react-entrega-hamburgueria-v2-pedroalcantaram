import React, { useContext, useEffect, useRef } from "react";
import { CardContext } from "../../context/CardContext";
import { StyledModal } from "./style";

interface iModalCartProps {
  id: string;
  children: React.ReactNode;
}

export const ModalCart = ({ id, children }: iModalCartProps) => {
  const { setModalIsOpen } = useContext(CardContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutSideClick: EventListenerOrEventListenerObject = (e) => {
      console.log(e.target, modalRef.current);
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutSideClick, true);

    return () => {
      document.removeEventListener("click", handleOutSideClick, true);
    };
  }, [setModalIsOpen]);

  return (
    <StyledModal id={id}>
      <div className="modalContainer" ref={modalRef}>
        {children}
      </div>
    </StyledModal>
  );
};
