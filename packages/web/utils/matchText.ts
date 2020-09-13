const matchText = (text: string, textToMatch: string) => {
  const format = (text: string) =>
    text.normalize('NFD').replace(/\W|\d/g, '').toUpperCase();
  return format(text).match(format(textToMatch));
};

export default matchText;
