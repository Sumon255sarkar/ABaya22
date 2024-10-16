import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">ABAYA</h3>
            <p className="mt-2 text-sm">Expert clothes detailing services</p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
            <p>&copy; 2023 ABAYA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;