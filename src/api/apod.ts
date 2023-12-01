import {formatToAPOD} from '../utils/date.ts';
import {ApodListParams} from '../types/ApodListParams.ts';
import {ApodParams} from '../types/ApodParams.ts';
import {ApodPage} from '../types/Page.ts';
import {getApodPage} from '../utils/page.ts';

export const getApodList = (pageNumber: number, numberPerPage: number): string => {
  const page: ApodPage = getApodPage(pageNumber, numberPerPage);

  const url: string = import.meta.env.VITE_NASA_API;
  const urlParams: ApodListParams = {
    api_key: import.meta.env.VITE_NASA_API_KEY,
    end_date: formatToAPOD(page.startDate),
    start_date: formatToAPOD(page.endDate),
  }

  return url +'?'+ new URLSearchParams(urlParams);
};

export const getApod = (date: Date): string => {
  const url: string = import.meta.env.VITE_NASA_API;
  const urlParams: ApodParams = {
    api_key: import.meta.env.VITE_NASA_API_KEY,
    date: formatToAPOD(date),
  }

  return url +'?'+ new URLSearchParams(urlParams);
}