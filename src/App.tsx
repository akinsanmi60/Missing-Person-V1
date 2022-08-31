import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DeathPage from "pages/deathsearch";
import BirthPage from "pages/birthsearch/birth";
import HomePage from "pages/home";
import Header from "common/Header";
import MissingPage from "pages/missingPerson/missing";

function Wrapper() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <div>
      <Wrapper />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/missing_person" element={<MissingPage />} />
        <Route path="/identified_person" element={<DeathPage />} />
        <Route path="/dead_bodies" element={<DeathPage />} />
        <Route path="/birth" element={<BirthPage />} />
        <Route path="/about" element={<DeathPage />} />
        <Route path="/contact" element={<BirthPage />} />
        <Route path="/press" element={<BirthPage />} />
        <Route path="/question" element={<BirthPage />} />
      </Routes>
    </div>
  );
}

export default App;
