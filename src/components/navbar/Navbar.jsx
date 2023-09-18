import { useState } from 'react';
import Link from '../link/Link';
import { RiMenuFill, RiCloseFill } from 'react-icons/ri';
const Navbar = () => {
  const routes = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/dashboard', name: 'Dashboard' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden hover:bg-gray-300 hover:text-white inline-block p-4 rounded"
        >
          {open ? (
            <RiCloseFill className="text-xl hover:text-white" />
          ) : (
            <RiMenuFill className="text-xl" />
          )}
        </div>
      </div>
      <ul
        className={`md:flex gap-6  duration-1000
        ${open ? 'md:top-0 top-12' : '-top-80 md:top-0'}
        absolute`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
