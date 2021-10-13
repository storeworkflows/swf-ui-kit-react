const trimString = (string) => string.trimStart();

export const stringToArray = (string, { divider }) => {
  if (!string) return [];

  return string.split(divider).filter(Boolean);
};
