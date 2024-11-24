import {Professor} from "@/app/_model/Professor";

export type Class = {
    name: string;
    code: string;
    semester: string;
    weight: number;
    teacher: Professor;
    unavailable_days: number[];
    required_days: number[];
}