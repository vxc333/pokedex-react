import { PokemonList } from "./components/pokemon/pokemonList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-red-600 via-red-500 to-red-400">
      <h1 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
        Pokédex
      </h1>
      <main className="w-full">
        <PokemonList />
      </main>
      <footer className="mt-8 text-center text-sm text-white">
        Powered by PokéAPI
      </footer>
    </div>
  );
}

export default App;