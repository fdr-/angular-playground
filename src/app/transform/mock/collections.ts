import { CompanyModel } from '../models/company.model';
import { BaseCollection } from '../collections/base.collection';
import { EmployeeModel } from '../models/employee.model';
import { omit as _omit } from 'lodash';

class CompanyCollection extends BaseCollection<CompanyModel> {}
class EmployeeCollection extends BaseCollection<EmployeeModel> {}

const NOW = new Date().getTime();
const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * DAY;

const companyList = [
    {id: 0, name: 'Company0', created: new Date(NOW), employees: []},
    {id: 1, name: 'Company1', created: new Date(NOW -  DAY), employees: []},
    {id: 2, name: 'Company2', created: new Date(NOW -  WEEK), employees: []},
]

const employeeList = [
    {id: 0, name: 'Employee0', created: new Date(NOW - DAY * 2), company: null},
    {id: 1, name: 'Employee1', created: new Date(NOW - DAY * 3), company: null},
    {id: 2, name: 'Employee2', created: new Date(NOW), company: null},
    {id: 3, name: 'Employee3', created: new Date(NOW), company: null},
    {id: 4, name: 'Employee4', created: new Date(NOW - DAY), company: null},
    {id: 5, name: 'Employee5', created: new Date(NOW - DAY * 2), company: null},
    {id: 6, name: 'Employee6', created: new Date(NOW - WEEK * 2), company: null},
];

const relations = new Set([
    {employee_id: 0, company_id: 0},
    {employee_id: 1, company_id: 1},
    // {employee_id: 2, company_id: 0},
    {employee_id: 3, company_id: 0},
    {employee_id: 4, company_id: 1},
    {employee_id: 5, company_id: 1},
    {employee_id: 6, company_id: 1},
]);

for (const rel of relations) {
    employeeList[rel.employee_id].company = _omit(companyList[rel.company_id], 'employees');
    companyList[rel.company_id].employees.push(_omit(employeeList[rel.employee_id], 'company'));
}

export const companyCollection = new CompanyCollection(companyList.map((c) => CompanyModel.of(c)));
export const employeeCollection = new EmployeeCollection(employeeList.map((e) => EmployeeModel.of(e)));
