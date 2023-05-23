export const dateParser = (inputDate: string): Date => {
  const dateParts = inputDate.split("/").map((v) => parseInt(v));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
