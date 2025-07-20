import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import BookingPage from './Pages/BookingPage.jsx';

const AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/booking',
    element: <BookingPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AllRoutes} />
  </StrictMode>
);