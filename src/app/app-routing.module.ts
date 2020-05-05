import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularDefaultPlaceholderComponent } from './angular-default-placeholder.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AngularDefaultPlaceholderComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {
}
