// import DOM and router 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages 
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Account from './pages/Account/Account.jsx';
import ErrorPage from './pages/ErrorPage.jsx'

// define router paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Account />
      }, {
        path: '/login',
        element: <Home />
      }
    ]
  },
]);

// mount router
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);