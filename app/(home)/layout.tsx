import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] });
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'PrestigePal',
  description: 'Your helpful AI companion',
};
const style = {
  background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' style={{ height: '100%' }}>
      <body className={inter.className} style={{ height: '100%' }}>
        <main className='flex h-full flex-col items-center justify-center bg-white text-black' style={style}>
          <h1 className='text-4xl'>Welcome to PrestigePal</h1>
          <p className='italic text-xl'>I can help you sound like a better version of you!</p>
          <p className='text-sm mb-4'>Makers of SwaggerMate</p>
          <div className='flex flex-col items-center w-1/2 border-4 rounded p-4 h-1/2'>{children}</div>
        </main>
      </body>
    </html>
  );
}
