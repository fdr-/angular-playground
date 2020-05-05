import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyApi } from './api/company.api';
import { EmployeeApi } from './api/employee.api';
import { applyMixins } from '../../../utils/apply-mixins';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(public readonly http: HttpClient) {
    }
}

export interface ApiService extends CompanyApi, EmployeeApi {}
applyMixins(ApiService, [CompanyApi, EmployeeApi]);
