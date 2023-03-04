export const truncate = (phrase: string, length = 130) => {
  if (phrase.length > length) {
    return phrase.slice(0, length) + "...";
  }

  return phrase;
};
