export const formatToAPOD = (date: Date): string => {
  const year: string = date.toLocaleString('default', {year: 'numeric'});
  const month: string = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day: string = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
}

export const formatStringDateToId = (stringDate: string): string => {
  return stringDate.replace(/-/g, '');
}

export const formatApodIdToDate = (apodId: string): Date => {
  const day: number = parseInt(apodId.slice(4, 6));
  const monthIndex: number = parseInt(apodId.slice(6, 8)) - 1;
  const year: number = parseInt(apodId.slice(0, 4));

  return new Date(year, monthIndex, day);
}