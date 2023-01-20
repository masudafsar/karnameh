import AppBar from '@component/appBar';
import { ModalContext } from '@context/modalContext';
import cn from 'classnames';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  const { isOpen } = React.useContext(ModalContext);
  return (
    <main
      className={cn(
        ['bg-secondary-lightest', 'min-h-screen', 'relative'],
        isOpen ? ['h-screen', 'overflow-hidden'] : [],
      )}
    >
      <AppBar />
      <section className="container mx-auto py-8">
        <Outlet />
      </section>
    </main>
  );
}

export default MainLayout;
