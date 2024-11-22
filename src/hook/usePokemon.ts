import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "../services/pokemonService";

export function usePokemons() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: pokemonService.getAll,
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => pokemonService.getDetails(name),
    enabled: !!name,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}
