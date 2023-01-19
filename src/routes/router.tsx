import { mainRouter } from '@route/mainRouter';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routers = createBrowserRouter([...mainRouter]);

function Router() {
  return <RouterProvider router={routers} />;
}

export default Router;
