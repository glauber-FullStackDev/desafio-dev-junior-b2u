export const currencyFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
}).format;
