import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
  hasSpacing: boolean;
  headerEl: React.ReactNode | null;
};

const Layout = ({ children, classes, hasSpacing, headerEl }: Props) => {
  return (
    <>
      <header>
        <Navbar />
        {headerEl && headerEl}
      </header>
      <main className={`${hasSpacing && 'pt-3'} ${classes} min-h-screen`}>
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  hasSpacing: false,
  headerEl: null,
};

export default Layout;
