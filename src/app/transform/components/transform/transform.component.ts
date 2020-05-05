import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { CompanyModel } from '../../models/company.model';

@Component({
    selector: 'app-transform',
    templateUrl: './transform.component.html',
    styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

    constructor(
        private api: ApiService,
    ) {
        console.log(this.api);
    }

    ngOnInit(): void {
        const company = CompanyModel.of({id: 0, name: 'asdf', created: '2020-01-01'});
        console.log(company, company.toLiteral());
    }

    getCompany() {
        this.api.getCompany('1')
            .subscribe(
                (res) => console.log(res),
                (error) => console.error(error),
            );
    }

    getEmployee() {}

}
