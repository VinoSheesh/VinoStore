import { Link } from "react-router-dom";

const Home = () => {
  const games = [
    { id: 1, name: "Mobile Legends", image: "/images/MLBB-2025-tiles-178x178.jpg" },
    { id: 2, name: "Free Fire", image: "images/free-fire-tile-codacash-new.jpg" },
    { id: 3, name: "PUBG Mobile", image: "images/pubgm_tile_aug2024.jpg" },
  ];

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Top Up Game Online</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {games.map((game) => (
          <Link key={game.id} to={`/product/${game.id}`} className="p-4 border rounded-lg shadow-lg text-center">
            <img src={game.image} alt={game.name} className="mx-auto mb-2"/>
            <h2 className="text-lg font-semibold">{game.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
