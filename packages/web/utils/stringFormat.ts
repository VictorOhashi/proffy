type stringFormat = (
  mask: string | { mask: string; discriminator: string },
  s: string
) => string;

const stringFormat: stringFormat = (mask, s) => {
  if (!s) {
    return '';
  }

  let template = mask as string,
    discriminator = '#';

  if (typeof mask === 'object') {
    template = mask.mask;
    discriminator = mask.discriminator;
  }

  const string = String(s).split('');
  const pattern = template.split('');

  let i = 0;
  let newString = '';

  pattern.forEach((p) => {
    const letter = string[i] && p.replace(discriminator, string[i]);

    if (p === discriminator) {
      i++;
    }
    if (letter) {
      newString = newString + letter;
    }
  });

  return newString;
};

export default stringFormat;
