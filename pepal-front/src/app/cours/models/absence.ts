import { Cours } from "./cours";

export interface Absence {
    id?: string,
    date: string,
    type: string,
    course: Cours,
    duration: number,
    isJustified: boolean
}
