import Modal from '@component/modal';
import { ModalContext } from '@context/modalContext';
import React, { PropsWithChildren, ReactNode } from 'react';

interface IProps {}

function ModalProvider({ children }: PropsWithChildren<IProps>) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState<ReactNode>(null);
  const [title, setTitle] = React.useState<string>();
  return (
    <ModalContext.Provider
      value={{
        isOpen: open,
        setOpen: setOpen,
        setContent: setContent,
        setTitle: setTitle,
      }}
    >
      {children}
      <Modal
        title={title}
        open={open}
        onDismiss={() => {
          setOpen(false);
        }}
      >
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

export default ModalProvider;
