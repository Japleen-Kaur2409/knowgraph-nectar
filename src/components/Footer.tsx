
import { Link } from 'react-router-dom';
import { Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold bg-gradient-to-r from-netblue-600 to-netblue-800 bg-clip-text text-transparent">
                NoteNet
              </h3>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transforming complex information into intuitive knowledge graphs for enhanced learning and accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/files">Files</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-netblue-500 mr-2 mt-0.5" />
                <a href="mailto:contact@notenet.io" className="text-gray-600 hover:text-netblue-600 transition-colors text-sm">
                  contact@notenet.io
                </a>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-netblue-500 mr-2 mt-0.5" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-netblue-600 transition-colors text-sm">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} NoteNet. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-netblue-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-netblue-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <li>
    <Link to={to} className="text-gray-600 hover:text-netblue-600 transition-colors text-sm">
      {children}
    </Link>
  </li>
);

export default Footer;
