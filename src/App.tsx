import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./template/app-layout";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import FriendsPage from "./pages/friends-page";
import DailyTasksPage from "./pages/daily-tasks-page";
import WalletPage from "./pages/wallet-page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/daily-tasks" element={<DailyTasksPage />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Routes>
        <AppLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
