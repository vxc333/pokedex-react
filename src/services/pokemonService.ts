import axios from "axios";
import { PokemonDetails, PokemonListItem } from "../types/pokemonTypes";

const API_URL = "https://pokeapi.co/api/v2";

/** Serviço para interação com a PokéAPI */
export const pokemonService = {
  /** Busca os primeiros 151 Pokémons (1ª geração) */
  getAll: async (): Promise<PokemonListItem[]> => {
    const response = await axios.get(`${API_URL}/pokemon?limit=151`);
    return response.data.results;
  },
  
  /** Busca detalhes de um Pokémon específico por nome */
  getDetails: async (name: string): Promise<PokemonDetails> => {
    const response = await axios.get(`${API_URL}/pokemon/${name}`);
    return response.data;
  }
};