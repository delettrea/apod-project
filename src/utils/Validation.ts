import {z} from 'zod';

export const dateValidator = z.string().refine((dateString) => {
  const startDate = new Date('1995-07-01');
  const currentDate = new Date();

  const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(dateString);

  if (!isValidDateFormat) {
    return false;
  }

  const inputDate = new Date(dateString);

  return startDate <= inputDate && inputDate <= currentDate;
}, {
  message: "La date doit être au format YYYY-MM-DD et comprise entre le 1er juillet 1995 et aujourd'hui.",
}).transform((value) => new Date(value));