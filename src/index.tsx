import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppAbout from '@/components/app-about/app-about';
import AppShop from '@/components/app-shop/app-shop';


const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <AppAbout />,
      },
      {
        path: '/shop',
        element: <AppShop />,
      },
    ],
  },
]);


container.render(
  <RouterProvider router={router} />,
);
