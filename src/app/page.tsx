"use client";
import Header from "@/components/layout/header/Header";
import NavBar from "@/components/layout/navbar/NavBar";
import HomePage from "@/components/view/home/page";
import Div100vh from "react-div-100vh";

export default function App() {
  return (
    <Div100vh>
      <Header />
      <div className="md:flex">
        <NavBar />
        <HomePage />
      </div>
    </Div100vh>
  );
}
