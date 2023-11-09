import {z} from 'zod';
import {formatApodIdToDate} from './Date.ts';

export const dateSchema =
  z
    .string()
    .regex(/^(1995(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])|[2-9]\d{3}(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])|20\d{2}(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2]))$/gm)
    .transform((value) => formatApodIdToDate(value))
;