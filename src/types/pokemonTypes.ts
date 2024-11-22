/** Representa um item básico da lista de Pokémons */
export interface PokemonListItem {
  name: string;
  url: string;
}

/** Detalhes completos de um Pokémon */
export interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
