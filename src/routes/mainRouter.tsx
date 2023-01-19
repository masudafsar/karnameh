import { Outlet, RouteObject } from 'react-router-dom';

import MainLayout from '../layout/mainLayout';

export const mainRouter: RouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: 'about',
        element: <>درباره</>,
      },
      {
        path: '*',
        element: <>خانه</>,
      },
    ],
  },
];
