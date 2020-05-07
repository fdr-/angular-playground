import { CompanyModel } from '../models/company.model';
import { EmployeeModel } from '../models/employee.model';
import { omit as _omit } from 'lodash';
import { CompanyCollection } from '../collections/company.collection';
import { EmployeeCollection } from '../collections/employee.collection';
import { employeeToCompanyRelation } from '../relations/employee-to-company.relation';


const NOW = new Date().getTime();
const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * DAY;

const companyList: Partial<CompanyModel>[] = [
    {id: '0', name: 'Company0', created: new Date(NOW), employees: []},
    {id: '1', name: 'Company1', created: new Date(NOW -  DAY), employees: []},
    {id: '2', name: 'Company2', created: new Date(NOW -  WEEK), employees: []},
]

const employeeList: Partial<EmployeeModel>[] = [
    {id: '0', name: 'Employee0', lastname: 'Lastname0', created: new Date(NOW - DAY * 2), company: null},
    {id: '1', name: 'Employee1', lastname: 'Lastname1', created: new Date(NOW - DAY * 3), company: null},
    {id: '2', name: 'Employee2', lastname: 'Lastname2', created: new Date(NOW), company: null},
    {id: '3', name: 'Employee3', lastname: 'Lastname3', created: new Date(NOW), company: null},
    {id: '4', name: 'Employee4', lastname: 'Lastname4', created: new Date(NOW - DAY), company: null},
    {id: '5', name: 'Employee5', lastname: 'Lastname5', created: new Date(NOW - DAY * 2), company: null},
    {id: '6', name: 'Employee6', lastname: 'Lastname6', created: new Date(NOW - WEEK * 2), company: null},
];

// kek, class-transformer is not able to deal with recursion
for (const [employee_id, company_id] of employeeToCompanyRelation) {
    employeeList[employee_id].company = _omit(companyList[company_id], 'employees');
    companyList[company_id].employees.push(_omit(employeeList[employee_id], 'company'));
}

export const companyCollection = new CompanyCollection(companyList.map((c) => CompanyModel.of(c)));
export const employeeCollection = new EmployeeCollection(employeeList.map((e) => EmployeeModel.of(e)));
