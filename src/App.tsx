import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./template/app-layout";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import FriendsPage from "./pages/friends-page";
import TasksPage from "./pages/tasks-page";
import WalletPage from "./pages/wallet-page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <AppLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
