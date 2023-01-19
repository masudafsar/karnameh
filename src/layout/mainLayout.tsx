import AppBar from '@component/appBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <main className="bg-SecondaryLightest min-h-screen">
      <AppBar />
      <Outlet />
    </main>
  );
}

export default MainLayout;
