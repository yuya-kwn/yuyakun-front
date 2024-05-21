"use client";
import Header from "@/components/layout/header/Header";
import Div100vh from "react-div-100vh";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Div100vh>
      <Header />
      {children}
    </Div100vh>
  );
}
