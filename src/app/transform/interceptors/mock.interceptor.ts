import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { companyCollection } from '../mock/collections';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('req', req);
        console.log(companyCollection);
        // return next.handle(req);
        return of(new HttpResponse({status: 200, body: {asd: 'asd'}}));
    }
}
