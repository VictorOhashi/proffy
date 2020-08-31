const stringFormat = (template: string, s: string) => {
  const string = s.split('');
  const pattern = template.split('');
  let i = 0;
  let newString = '';

  pattern.forEach((p) => {
    const letter = string[i] && p.replace(/#(.*?)/, string[i]);
    if (p === '#') {
      i++;
    }
    if (letter) {
      newString = newString + letter;
    }
  });
  return newString;
};

export default stringFormat;
