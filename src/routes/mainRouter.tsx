import MainLayout from '@layout/mainLayout';
import QuestionList from '@page/QuestionList';
import QuestionSingle from '@page/QuestionSingle';
import { RouteObject } from 'react-router-dom';

export const mainRouter: RouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: ':id',
        element: <QuestionSingle />,
      },
      {
        path: '*',
        element: <QuestionList />,
      },
    ],
  },
];
