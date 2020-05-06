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
    {id: 0, name: 'Employee0', lastname: 'Lastname0', created: new Date(NOW - DAY * 2), company: null},
    {id: 1, name: 'Employee1', lastname: 'Lastname1', created: new Date(NOW - DAY * 3), company: null},
    {id: 2, name: 'Employee2', lastname: 'Lastname2', created: new Date(NOW), company: null},
    {id: 3, name: 'Employee3', lastname: 'Lastname3', created: new Date(NOW), company: null},
    {id: 4, name: 'Employee4', lastname: 'Lastname4', created: new Date(NOW - DAY), company: null},
    {id: 5, name: 'Employee5', lastname: 'Lastname5', created: new Date(NOW - DAY * 2), company: null},
    {id: 6, name: 'Employee6', lastname: 'Lastname6', created: new Date(NOW - WEEK * 2), company: null},
];

const employeeToCompanyRelations = new Map([
    [0, 0],
    [1, 1],
    // no company for 3rd one, sad :'(
    // [2, 0],
    [3, 0],
    [4, 1],
    [5, 1],
    [6, 1],
]);

// kek, class-transformer is not able to deal with recursion
for (const [employee_id, company_id] of employeeToCompanyRelations) {
    employeeList[employee_id].company = _omit(companyList[company_id], 'employees');
    companyList[company_id].employees.push(_omit(employeeList[employee_id], 'company'));
}

export const companyCollection = new CompanyCollection(companyList.map((c) => CompanyModel.of(c)));
export const employeeCollection = new EmployeeCollection(employeeList.map((e) => EmployeeModel.of(e)));
