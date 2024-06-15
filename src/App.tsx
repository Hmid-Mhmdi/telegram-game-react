import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./template/app-layout";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import FriendsPage from "./pages/friends-page";
import TasksPage from "./pages/tasks-page";
import WalletPage from "./pages/wallet-page";
import NotFoundPage from "./pages/notfound-page";

const router = createBrowserRouter([
  {
    path: "/telegram-game-react",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/telegram-game-react/profile",
        element: <ProfilePage />,
      },
      {
        path: "/telegram-game-react/friends",
        element: <FriendsPage />,
      },
      {
        path: "/telegram-game-react/tasks",
        element: <TasksPage />,
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
