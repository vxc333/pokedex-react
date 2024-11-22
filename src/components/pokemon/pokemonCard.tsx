import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CommandItem } from "../ui/command";
import { PokemonListItem } from "../../types/pokemonTypes";
import { usePokemonDetails } from "../../hook/usePokemon";
import { getRandomColor } from "../../utils/colors";
import { Badge } from "../ui/badge";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const bgColor = useMemo(() => getRandomColor(), []);
  const { data: details } = usePokemonDetails(pokemon.name);

  const getPokemonId = (url: string) => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : null;
  };

  const pokemonId = getPokemonId(pokemon.url);
  const imageUrl = pokemonId
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    : null;

  return (
    <CommandItem
      className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-red-50 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition-colors"
      value={pokemon.name}
      role="option"
      aria-selected="false"
    >
      <Avatar className="h-12 w-12 ring-2 ring-red-200 bg-red-50">
        <AvatarImage
          src={imageUrl || details?.sprites.front_default}
          alt={`Imagem do ${pokemon.name}`}
          loading="lazy"
        />
        <AvatarFallback className={bgColor}>
          {pokemon.name
            .split("-")
            .slice(0, 2)
            .map((name) => name[0])
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </span>
        {details && (
          <div className="flex flex-wrap gap-1">
            {details.abilities.map((ability) => (
              <Badge
                key={ability.ability.name}
                variant="secondary"
                className="text-xs bg-red-100 text-red-700 hover:bg-red-200"
              >
                {ability.ability.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </CommandItem>
  );
}
