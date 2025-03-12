import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">TopUpGame</Link>
      <div>
        <Link to="/games" className="mx-2">Games</Link>
        <Link to="/login" className="mx-2">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
