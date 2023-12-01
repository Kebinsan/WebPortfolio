import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Spotify from "./components/Spotify";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container main-content">
        <Profile />
        <About />
        <Projects />
        <Spotify />
      </main>
      <Footer />
    </>
  );
}
