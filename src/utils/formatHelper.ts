export function currentDateToString(): string{
    return dateToString(new Date());
}

export function dateToString(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day.toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${year}`;
}

export function currentHourToString():string{
    return hourToString(new Date());
}

export function hourToString(date: Date):string{
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`;
}

export function dateToStringDotsSeparator(date: Date):string{
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day.toString().padStart(2,'0')}.${month.toString().padStart(2,'0')}.${year}`;
}