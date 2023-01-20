import React from 'react';

interface IModalContext {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const defaultValue: IModalContext = {
  isOpen: false,
  setOpen: () => {},
  setContent: () => {},
  setTitle: () => {},
};

export const ModalContext = React.createContext<IModalContext>(defaultValue);
