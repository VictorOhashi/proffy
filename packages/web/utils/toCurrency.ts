const toCurrency = (number: number) =>
  number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

export default toCurrency;
