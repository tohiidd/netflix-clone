import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Index from "../pages/Index";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import WatchPage from "../pages/WatchPage";

function Netflix() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/watch" element={<WatchPage />} />
    </Routes>
  );
}

export default Netflix;
