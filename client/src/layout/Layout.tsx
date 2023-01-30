import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
  hasSpacing: boolean;
};

const Layout = ({ children, classes, hasSpacing }: Props) => {
  return (
    <>
      <Navbar />
      <main className={`${hasSpacing && 'pt-3'} ${classes}`}>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  hasSpacing: false,
};

export default Layout;
