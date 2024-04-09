import { lazy } from 'react';
import { RouteProps } from './routes.types';

const Layout = lazy(() => import('@/pages/Layout'));

const routes: RouteProps[] = [
  {
    key: 'layout',
    path: '/',
    component: Layout,
  },
];

export { routes };
