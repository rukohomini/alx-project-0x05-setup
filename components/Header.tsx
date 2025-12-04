
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ImageGen</h1>
        <nav className="space-x-4">
          <Link href="/"><a className="hover:text-gray-400">Home</a></Link>
          <Link href="/gallery"><a className="hover:text-gray-400">Gallery</a></Link>
          <Link href="/about"><a className="hover:text-gray-400">About</a></Link>
          <Link href="/contact"><a className="hover:text-gray-400">Contact</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

