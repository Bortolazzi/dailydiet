export const toPercentage = (number: number) => {
  if (number) {
    return `${number.toFixed(2)
      .replace('.', ',')
      .padStart(2, '0')}%`
  }
  return '0,00%';
}

export function dateAndTimeToDateTime(date: string, time: string): Date{
    const day = date.split('/')[0];
    const month = date.split('/')[1];
    const year = date.split('/')[2];

    return new Date(`${year}-${month}-${day}T${time}:00.000Z`);
}

export function dateDashToDateTime(date:string):Date{
    const day = date.split('.')[0];
    const month = date.split('.')[1];
    const year = date.split('.')[2];

    return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
}