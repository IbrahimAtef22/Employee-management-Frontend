import { Department } from "./department";

export class Employee {
    id?: number;
    code?: string;
    name?: string;
    birthDate?: Date;
    birthCity?: string;
    jobTitle?: string;
    directManager?: Employee;
    contractType?: string;
    status?: string;
    department?: Department;

    constructor() { }
}
