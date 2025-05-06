"use client";

import { MainHome } from "@/features/Content/MainHome";
import { Profile } from "@/features/Content/Profile";
import { Skill } from "@/features/Content/Skill";
import { Footer } from "@/features/Footer";
import { Header } from "@/features/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <MainHome />
      <Profile />
      <Skill />
      <Footer />
    </>
  );
};

export default Home;
