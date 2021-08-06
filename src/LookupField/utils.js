const trimString = (string) => string.trimStart();

export const stringToArray = (string, { divider }) => {
  if (!string) return [];

  return string.split(divider).map(trimString).filter(Boolean);
};
