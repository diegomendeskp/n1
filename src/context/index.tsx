import React, { useState, createContext, useContext } from 'react';
const ModalContext = createContext({});

const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(): boolean {
    setIsOpen(!isOpen);
    return !isOpen;
  }

  function autoToggleModal(): boolean {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 5500);
    return !isOpen;
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, autoToggleModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = (): any => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
