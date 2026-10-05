import { PropsWithChildren } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useSettings } from '../storeApi';

export default function Layout({ children }: PropsWithChildren) {
  const { announcement, announcementOn } = useSettings();
  return (
    <>
      {announcementOn && announcement && (
        <div className="w-full bg-primary text-on-primary text-center text-xs sm:text-sm font-semibold tracking-wide px-4 py-2">{announcement}</div>
      )}
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
