const NUM_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const formatNumberInput = (input: number | string): string | null => {
  if (input == null) return null;
  const operand = input.toString();

  const [integer, decimal] = operand.split(".");
  const formattedInteger: number = Number(integer);
  if (decimal == null) return NUM_FORMATTER.format(formattedInteger);
  return `${NUM_FORMATTER.format(formattedInteger)}.${decimal}`;
};

export {formatNumberInput}