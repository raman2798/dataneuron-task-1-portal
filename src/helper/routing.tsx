import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const PublicRoute: FC = (): ReactElement => {
  return <Outlet />;
};
