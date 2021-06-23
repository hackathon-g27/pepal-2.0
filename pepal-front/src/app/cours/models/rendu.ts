import { User } from "src/app/shared/models/user";
import { Work } from "./work";

export interface Rendu {
    id?: string,
    title: string,
    course: string,
    teacher: User,
    deadline: Date,
    files?: Work[]
}
