import { Outlet, RouteObject } from 'react-router-dom';

export const mainRouter: RouteObject[] = [
  {
    path: '*',
    element: (
      <h1>
        Page:
        <Outlet />
      </h1>
    ),
    children: [
      {
        path: 'about',
        element: <>About</>,
      },
      {
        path: '*',
        element: <>Home</>,
      },
    ],
  },
];
