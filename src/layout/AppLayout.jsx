import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
