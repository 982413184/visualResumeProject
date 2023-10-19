import Root from '@src/container/root/';
import Resume from '@src/container/resume';
import ROUTER from '@src/common/constants/router';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTER.root,
    element: <Root />,
  },
  {
    path: ROUTER.resume,
    element: <Resume />,
  },
]);

export default router;
