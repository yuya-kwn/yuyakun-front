"use client";
import Header from "@/components/layout/header/Header";
import HomePage from "@/components/view/home/page";
import Div100vh from "react-div-100vh";

export default function App() {
  return (
    <Div100vh>
      <Header />
      <HomePage />
    </Div100vh>
  );
}
