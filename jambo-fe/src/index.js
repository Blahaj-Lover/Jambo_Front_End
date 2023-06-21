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
import UploadPage from './pages/Upload';
import UploadedGame from './pages/Uploaded_Game';
import About2 from "./pages/About2";
import About3 from "./pages/About3";

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
    path: "spirit-well",
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

  {
    path: "UploadedGame",
    element: <UploadedGame />
  },

  {
    path: "UploadPage",
    element: <UploadPage />
  },

  {
    path: "Necken",
    element: <About2 />
  },

  {
    path: "spirit-weII",
    element: <About3 />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);