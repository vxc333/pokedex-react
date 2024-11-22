# Pokédex React

Uma Pokédex moderna construída com React, TypeScript e TailwindCSS.

## Funcionalidades

- 🔍 Busca em tempo real de Pokémons
- ⌨️ Navegação por teclado (Ctrl + / para focar na busca)
- 🎨 Interface responsiva e acessível
- ⚡ Carregamento otimizado de imagens
- 🔄 Cache de dados com React Query
- 📱 Design responsivo
- ♿ Acessibilidade com ARIA labels

## Tecnologias

- React 18
- TypeScript
- TailwindCSS
- Radix UI
- React Query
- Axios

## Como Executar

Clonar o repositório

```bash
git clone https://github.com/vxc333/pokedex-react.git
```

Instalar dependências

```bash
npm install
```

Rodar em modo de desenvolvimento

```bash
npm run dev
```

## Estrutura do Projeto

```text
src/
├── components/
│   ├── pokemon/     # Componentes específicos de Pokémon
│   └── ui/          # Componentes UI reutilizáveis
├── hooks/           # Custom hooks
├── services/        # Serviços de API
├── types/           # Tipos TypeScript
└── utils/           # Utilitários
```

## Decisões de Arquitetura

- **Componentes**: Separados por domínio (pokemon) e UI genérica
- **React Query**: Gerenciamento de estado e cache para requisições
- **Radix UI**: Componentes base acessíveis
- **TailwindCSS**: Estilização utilitária e responsiva

## API

O projeto utiliza a [PokéAPI](https://pokeapi.co/) para obter os dados dos Pokémons.

## Contribuindo

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar um PR.

## Licença

MIT
