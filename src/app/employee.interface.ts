export interface Employee {
    id: number;
    name: string;
    gender: string;
    contactPreference: string;
    email?: string;
    phoneNumber?: number;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath: string;
}