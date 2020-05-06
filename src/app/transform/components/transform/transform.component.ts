import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
    selector: 'app-transform',
    templateUrl: './transform.component.html',
    styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

    constructor(
        private api: ApiService,
    ) {
    }

    ngOnInit(): void {
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
