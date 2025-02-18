import { Route, Routes } from "react-router-dom";
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
      <Route path="/" element={<Home />} />
      <Route path="/claim" element={<Claim />} />
      <Route path="/play" element={<Play />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/leaders" element={<Leaderboard />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/quests" element={<Quests />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
};

export default Router;
