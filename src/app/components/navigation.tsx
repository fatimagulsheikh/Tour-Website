import Link from "next/link";
import { Container } from "./container";

const navItems = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Places",
    href: "/places",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  return (
    <Container>
      <nav className="flex justify-between items-center py-6 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-white font-extrabold text-2xl skew-x-[-6deg]">
          Next-Tour 🌍
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          {navItems.map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.href}
                className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 hover:underline underline-offset-4"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="px-6 py-3 bg-yellow-400 text-purple-900 font-bold rounded-md shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300">
          Login
        </button>
      </nav>
    </Container>
   
  );
}

