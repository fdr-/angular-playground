import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { companyCollection, employeeCollection } from '../mock/collections';
import { BaseCollection } from '../collections/base.collection';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const data = this.handle(req);
        return data ? of(new HttpResponse({status: 200, body: data})) : next.handle(req);
    }

    handle(request: HttpRequest<any>): boolean {
        const [, collectionName, collectionMethod] = request.url.split('/');
        const collection = this.resolveCollection(collectionName);

        if (!collection) {
            return;
        }

        const method = this.resolveMethod(collection, collectionMethod);

        if (!method) {
            return;
        }

        const args = this.resolveArgs(request.method, request.params, request.body);

        if (!args.length) {
            return;
        }

        return collection[method].apply(collection, args);
    }

    resolveCollection(name: string): BaseCollection<any> {
        switch (name) {
            case 'company': return companyCollection;
            case 'employee': return employeeCollection;
        }
    }

    resolveMethod(collection: BaseCollection<any>, method: string = 'get') {
        return typeof collection[method] === 'function' ? method : null;
    }

    resolveArgs(requestMethod: string, params: HttpParams, data: any): any[] {
        let id;
        let args;

        if (requestMethod === 'GET' || requestMethod === 'DELETE') {
            id = params.get('id');
            args = [id];
        } else {
            id = data.id;
            args = [id, data];
        }

        return id ? args : [];
    }
}
