export const formatToAPOD = (date: Date): string => {
  const year: string = date.toLocaleString('default', {year: 'numeric'});
  const month: string = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day: string = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
}

export const formatApodDateToDate = (apodDate: string): Date => {
  const date: string[] = apodDate.split('-');

  const year: number = parseInt(date[0]);
  const monthIndex: number = parseInt(date[1]) - 1;
  const day: number = parseInt(date[2]);

  return new Date(year, monthIndex, day);
}