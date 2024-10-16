"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            ABAYA
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <Button variant={pathname === '/' ? 'default' : 'ghost'}>Home</Button>
            </Link>
            <Link href="/services" passHref>
              <Button variant={pathname === '/services' ? 'default' : 'ghost'}>Services</Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant={pathname === '/about' ? 'default' : 'ghost'}>About</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant={pathname === '/contact' ? 'default' : 'ghost'}>Contact</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;