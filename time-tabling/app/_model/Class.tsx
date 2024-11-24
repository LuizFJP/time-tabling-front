import {Professor} from "@/app/_model/Professor";

export type Subject = {
    name: string;
    code: string;
    semester: string;
    weight: number;
    teacher: Professor;
    unavailable_days: number[];
    required_days: number[];
}