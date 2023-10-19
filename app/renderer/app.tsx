import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import store from '@src/store';
import { Provider } from 'react-redux';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>,
);
