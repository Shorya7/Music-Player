import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Login from "./Login";
 import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
function AppRouter() {
    return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home"   element={<Discover />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
    </Routes>
    </Router>
    );
}
export default AppRouter;