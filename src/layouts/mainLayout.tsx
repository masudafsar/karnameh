import AppBar from '@component/appBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <main className="bg-secondary-lightest min-h-screen">
      <AppBar />
      <section className="container mx-auto my-8">
        <Outlet />
      </section>
    </main>
  );
}

export default MainLayout;
