import { CompanyModel } from './company.model';
import { classToPlain, Exclude, Expose, plainToClass, Transform } from 'class-transformer';

@Exclude()
export class EmployeeModel {
    @Expose()
    id: string;

    @Expose()
    name: string;

    @Expose()
    lastname: string;

    @Expose()
    company: CompanyModel | null;

    @Expose()
    @Transform((value: string) => new Date(value), {toClassOnly: true})
    @Transform((value: Date) => `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`, {toPlainOnly: true})
    created: Date;

    static of(data: any) {
        return plainToClass(EmployeeModel, data, {excludeExtraneousValues: true});
    }

    getFullName(): string {
        return `${this.name} ${this.lastname}`;
    }

    toLiteral() {
        return classToPlain(this);
    }
}
