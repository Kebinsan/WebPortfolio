import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Spotify from "./components/Spotify";

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <div class="container left-col">
          <Profile />
        </div>
        <div class="container right-col">
          <Projects />
          <Spotify />
        </div>
      </main>
      <Footer />
    </>
  );
}
