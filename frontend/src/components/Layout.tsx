import React, { useEffect } from "react";
import Footer from "./Footer";

type Props = {
  children: JSX.Element
}


const Layout = ({children}: Props) => {
  return (
    <>
      <div className="container">
        <main className="content-page">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
