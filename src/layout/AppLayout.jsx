import { Toolbar } from "@mui/material";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Toolbar sx={{ py:2}}/>
      {children}
      <Footer />
    </>
  );
};
