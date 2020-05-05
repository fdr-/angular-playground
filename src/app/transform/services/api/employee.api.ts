import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { map } from 'rxjs/operators';

export class EmployeeApi {
    constructor(public readonly http: HttpClient) {
    }

    getEmployees(): Observable<EmployeeModel[]> {
        return this.http.get('/companies')
            .pipe(map((res: any[]) => res.map(EmployeeModel.of)));
    }

    createEmployee(employee: EmployeeModel): Observable<{id: string}> {
        return this.http.post<{id: string}>('/employee/create', employee.toLiteral());
    }

    getEmployee(id: string): Observable<EmployeeModel> {
        const params = {id};
        return this.http.get('/employee', {params})
            .pipe(map(EmployeeModel.of));
    }

    updateEmployee(employee: EmployeeModel): Observable<{id: string}> {
        return this.http.put<{id: string}>('/employee/update', employee.toLiteral());
    }

    deleteEmployee(id: string): Observable<void> {
        const params = {id};
        return this.http.delete<void>('/employee/delete', {params});
    }
}
