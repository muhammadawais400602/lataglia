import { PropsWithChildren } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
