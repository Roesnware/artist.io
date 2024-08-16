import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Account from './pages/Account/Account.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ErrorPage from './pages/Error/ErrorPage.jsx';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/signup',
        element: <Account />
      }, 
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/characters/:characterId',
        element: <CharacterDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);