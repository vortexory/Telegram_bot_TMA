import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/router/ProtectedRoute";
import Claim from "@/pages/Claim";
import Home from "@/pages/Home";
import Play from "@/pages/Play";
import Shop from "@/pages/Shop";
import Leaderboard from "@/pages/Leaderboard";
import Friends from "@/pages/Friends";
import Quests from "@/pages/Quest";
import Card from "@/pages/Card";

const Router = () => {
  return (
    <Routes>
      <Route path="/claim" element={<Claim />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/play"
        element={
          <ProtectedRoute>
            <Play />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shop"
        element={
          <ProtectedRoute>
            <Shop />
          </ProtectedRoute>
        }
      />
      <Route
        path="/leaders"
        element={
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/friends"
        element={
          <ProtectedRoute>
            <Friends />
          </ProtectedRoute>
        }
      />
      <Route
        path="/quests"
        element={
          <ProtectedRoute>
            <Quests />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card"
        element={
          <ProtectedRoute>
            <Card />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
