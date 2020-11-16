export const toNativeCurrency = (number: number) => {
  const formatedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `R$ ${formatedNumber}`;
};

export const toCurrency = (number: number) =>
  number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
