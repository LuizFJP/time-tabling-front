export enum WeekDaysEnum {
    SEGUNDA = 0,
    TERCA = 1,
    QUARTA = 2,
    QUINTA = 3,
    SEXTA = 4,
    SABADO = 5,
}

export type UnavailableWeekDays = {
    [WeekDaysEnum.SEGUNDA]: boolean;
    [WeekDaysEnum.TERCA]: boolean;
    [WeekDaysEnum.QUARTA]: boolean;
    [WeekDaysEnum.QUINTA]: boolean;
    [WeekDaysEnum.SEXTA]: boolean;
    [WeekDaysEnum.SABADO]: boolean;
};