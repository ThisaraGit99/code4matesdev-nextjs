import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo/Company Name */}
          <div className="text-xl font-bold">Code4MatesDev</div>

          {/* Quick Links */}
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-teal transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-teal transition duration-300">
              About
            </Link>
            <Link href="/services" className="hover:text-teal transition duration-300">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-teal transition duration-300">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-teal transition duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-teal transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-teal transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-teal transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-teal transition duration-300" />
          </a>
        </div>

        {/* Additional Information */}
        <div className="mt-6 text-center text-sm">
          <p>© 2025 Code4MatesDev. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-8">
            <Link href="/privacy-policy" className="hover:text-teal transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-teal transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
