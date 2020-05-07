import { EmployeeModel } from './employee.model';
import {
    classToPlain,
    Exclude,
    Expose,
    plainToClass,
    Transform,
} from 'class-transformer';

@Exclude()
export class CompanyModel {
    @Expose()
    id: string;

    @Expose()
    name: string;

    @Expose()
    employees: EmployeeModel[] = [];

    @Expose()
    @Transform((value: string | Date) => new Date(value), {toClassOnly: true})
    @Transform((value: Date) => `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`, {toPlainOnly: true})
    created: Date;

    static of(data: any) {
        return plainToClass(CompanyModel, data, {excludeExtraneousValues: true});
    }

    hasEmployees(): boolean {
        return !!(this.employees && this.employees.length);
    }

    toLiteral() {
        return classToPlain(this);
    }
}
