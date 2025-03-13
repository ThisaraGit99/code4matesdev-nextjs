import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold">Code4MatesDev</div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-teal transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-teal transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-teal transition duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
