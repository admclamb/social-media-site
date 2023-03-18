import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  hasSpacing: boolean;
  headerEl: React.ReactNode | null;
};

const Layout = ({ children, className, hasSpacing, headerEl }: Props) => {
  return (
    <>
      <header>
        <Navbar />
        {headerEl && headerEl}
      </header>
      <main className={`${hasSpacing && "pt-3"} ${className} min-h-screen`}>
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  hasSpacing: false,
  headerEl: null,
  className: "",
};

export default Layout;
