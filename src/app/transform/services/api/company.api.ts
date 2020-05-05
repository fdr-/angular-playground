import { Observable } from 'rxjs';
import { CompanyModel } from '../../models/company.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class CompanyApi {
    constructor(public readonly http: HttpClient) {
    }

    getCompanies(): Observable<CompanyModel[]> {
        return this.http.get('/companies')
            .pipe(map((res: any[]) => res.map(CompanyModel.of)));
    }

    createCompany(company: CompanyModel): Observable<{id: string}> {
        return this.http.post<{id: string}>('/company/create', company.toLiteral());
    }

    getCompany(id: string): Observable<CompanyModel> {
        const params = {id};
        return this.http.get('/company', {params})
            .pipe(map(CompanyModel.of));
    }

    updateCompany(company: CompanyModel): Observable<{id: string}> {
        return this.http.put<{id: string}>('/company/update', company.toLiteral());
    }

    deleteCompany(id: string): Observable<void> {
        const params = {id};
        return this.http.delete<void>('/company/delete', {params});
    }
}
