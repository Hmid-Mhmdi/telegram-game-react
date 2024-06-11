import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <AppLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
