import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="font-bold animate-pulse text-7xl text-clip px-6 py-1 bg-gradient-to-r rounded-lg from-rose-400/60 via-pink-700/90 to-cyan-400/60">
        Coming soon...
      </div>
    </main>
  );
}
