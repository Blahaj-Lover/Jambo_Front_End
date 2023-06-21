import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';
import Crowdfunding_1 from './pages/Crowdfunding_1';
import Crowdfunding_2 from './pages/Crowdfunding_2';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "explore",
    element: <Explore />,
  },

  {
    path: "about",
    element: <About />,
  },

  {
    path: "sign-in",
    element: <Sign_in />,
  },

  {
    path: "sign-up",
    element: <Sign_up />,
  },

  {
    path: "payment",
    element: <Crowdfunding_1 />
  },

  {
    path: "Success",
    element: <Crowdfunding_2 />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);