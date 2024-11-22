import { useEffect, useState } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
} from "../ui/command";
import { PokemonCard } from "./pokemonCard";
import { usePokemons } from "../../hook/usePokemon";
import { useKeyboardNavigation } from "../../utils/keyboard";
import { Loader2 } from "lucide-react";

export function PokemonList() {
  const { data: pokemons = [], isLoading, error } = usePokemons();
  const { searchRef } = useKeyboardNavigation();
  const [search, setSearch] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (window.innerWidth > 768) {
      searchRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <div
        role="alert"
        className="text-red-500 p-4 rounded-lg bg-red-50 border border-red-200"
      >
        <h2 className="font-semibold">Erro ao carregar pokémons</h2>
        <p>{(error as Error).message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-sm underline"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="sr-only">Lista de Pokémons</h2>
      <Command
        className="rounded-2xl border-2 border-red-200 shadow-lg bg-white/95"
        aria-label="Pokédex - Barra de busca"
      >
        <CommandInput
          placeholder="Qual Pokémon você está procurando? (Ctrl + / para focar)"
          ref={searchRef}
          value={search}
          onValueChange={setSearch}
          className="h-14"
        />
        {isLoading ? (
          <div className="p-8 text-center" role="status" aria-live="polite">
            <Loader2 className="h-6 w-6 animate-spin mx-auto" aria-hidden="true" />
            <p className="mt-2 text-sm text-muted-foreground">
              Carregando pokémons...
            </p>
          </div>
        ) : (
          <CommandList className="max-h-[400px] overflow-auto">
            <CommandEmpty>Nenhum pokémon encontrado.</CommandEmpty>
            {filteredPokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </CommandList>
        )}
      </Command>
    </div>
  );
}
