export const convertToMio = (value: number): number => {
  const millions = value / 1.0e6;

  return +millions.toFixed(2);
};

export const convertToK = (value: number): number => {
  const thousands = value / 1.0e3;

  return +thousands.toFixed(2);
};

export const formatPrice = (price: number): string => {
  switch (true) {
    case price >= 1.0e6:
      return convertToMio(price) + 'M';
    case price >= 1.0e3:
      return convertToK(price) + 'K';
    default:
      return price.toString();
  }
};
