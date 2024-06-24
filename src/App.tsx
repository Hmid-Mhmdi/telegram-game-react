import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./template/app-layout";
import HomePage from "./pages/home-page";
import EarnPage from "./pages/earn-page";
import WalletPage from "./pages/wallet-page";
import NotFoundPage from "./pages/notfound-page";
import WelcomePage from "./pages/welcome-page";
import Layout from "./template/layout";

const router = createBrowserRouter([
  {
    path: "/telegram-game-react",
    errorElement: <NotFoundPage />,
    element: <Layout />,
    children: [
      {
        path: "/telegram-game-react/app",
        element: <AppLayout />,
        children: [
          {
            path: "/telegram-game-react/app/earn",
            element: <EarnPage />,
          },
          {
            path: "/telegram-game-react/app/wallet",
            element: <WalletPage />,
          },
          {
            index: true,
            path: "/telegram-game-react/app/home",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "/telegram-game-react/welcome",
        element: <WelcomePage />,
        index: true,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
