import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformComponent } from './components/transform/transform.component';
import { TransformRoutingModule } from './transform-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockInterceptor } from './interceptors/mock.interceptor';


@NgModule({
    declarations: [TransformComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        TransformRoutingModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MockInterceptor,
            multi: true,
        }
    ]
})
export class TransformModule {
}
