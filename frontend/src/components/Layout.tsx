import React from "react";
import Toolbar from "./Toolbar"
import Footer from "./Footer";

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Toolbar />
        <div className="container">
        <main className="content-page">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
