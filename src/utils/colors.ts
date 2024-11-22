/** Cores disponíveis para avatares de fallback */
export const avatarColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
] as const;

/** Retorna uma cor aleatória para uso em avatares */
export const getRandomColor = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
};