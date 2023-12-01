import {ApodPage} from '../types/Page.ts';

export const getApodPage = (
  pageNumber: number,
  numberPerPage: number,
  lastApodDate: Date = new Date(import.meta.env.VITE_NASA_FIRST_APOD_DATE)
): ApodPage => {

  const startDate: Date = new Date();

  if (pageNumber >= 1) {
    const daysToAdd: number = numberPerPage * pageNumber;
    startDate.setDate(startDate.getDate() - daysToAdd);
  }

  let endDate: Date = new Date(startDate);
  endDate.setDate(endDate.getDate() - (numberPerPage - 1));

  if (endDate < lastApodDate) {
    endDate = lastApodDate;
  }

  return {
    startDate: startDate,
    endDate: endDate,
    pageNumber: pageNumber
  }
}