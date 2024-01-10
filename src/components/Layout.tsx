import React from 'react';
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout_div'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
