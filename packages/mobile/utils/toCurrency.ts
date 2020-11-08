const toCurrency = (number: number) => {
  const formatedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `R$ ${formatedNumber}`;
};

export default toCurrency;
