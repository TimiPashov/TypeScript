function dayOfWeek(day: string): number | string {
    enum weekDays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    const i: number | undefined = weekDays[day as keyof typeof weekDays];
    if (i !== undefined) {
        return i;
    } else {
        return 'error';
    }

}console.log(dayOfWeek('Sunday'));
