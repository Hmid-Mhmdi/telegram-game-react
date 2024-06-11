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
        path: "",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/friends",
        element: <FriendsPage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
      },
      {
        path: "/wallet",
        element: <WalletPage />,
      },
      {
        path: "",
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
