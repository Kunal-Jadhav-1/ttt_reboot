
import React from 'react';
import './index.css'; 
import HomePage from './src/components/HomePage';
import Error from './src/components/Error';
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './src/components/HomePage';



const AppLayout = () => {

  return (
    <div>
      <Outlet />
    </div>
  );

};

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          errorElement: <Error />,
      },
      ],
      errorElement: <Error />,
  },
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

