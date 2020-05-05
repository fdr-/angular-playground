import { RouterModule, Routes } from '@angular/router';
import { TransformComponent } from './components/transform/transform.component';
import { NgModule } from '@angular/core';

const transformRoutes: Routes = [
    {
        path: 'transform',
        component: TransformComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(transformRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class TransformRoutingModule {
}
