import ky from 'ky';
import {formatToAPOD} from '../utils/date.ts';
import {Apod} from '../types/Apod.ts';
export const getAPODList = async (firstDate: Date, lastDate: Date): Promise<Apod[]> => {
  return ky.get(
    import.meta.env.VITE_NASA_API,
    {
      searchParams:
        {
          api_key: import.meta.env.VITE_NASA_API_KEY,
          end_date: formatToAPOD(firstDate),
          start_date: formatToAPOD(lastDate),
        }
    })
    .json()
}

export const getAPOD = async (apodDate: Date): Promise<Apod> => {
  return ky.get(
    import.meta.env.VITE_NASA_API,
    {
      searchParams: {
        api_key: import.meta.env.VITE_NASA_API_KEY,
        date: formatToAPOD(apodDate),
      }
    })
    .json()
}