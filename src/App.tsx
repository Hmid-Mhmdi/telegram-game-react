import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./template/app-layout";
import HomePage from "./pages/home-page";
import EarnPage from "./pages/earn-page";
import WalletPage from "./pages/wallet-page";
import NotFoundPage from "./pages/notfound-page";
import WelcomePage from "./pages/welcome-page";

const router = createBrowserRouter([
  {
    path: "/telegram-game-react/welcome",
    errorElement: <NotFoundPage />,
    element: <WelcomePage />,
  },
  {
    path: "/telegram-game-react",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/telegram-game-react/earn",
        element: <EarnPage />,
      },
      {
        path: "/telegram-game-react/wallet",
        element: <WalletPage />,
      },
      {
        index: true,
        path: "/telegram-game-react/home",
        element: <HomePage />,
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
