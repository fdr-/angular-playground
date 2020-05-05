import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TransformModule } from './transform/transform.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularDefaultPlaceholderComponent } from './angular-default-placeholder.component';

@NgModule({
    declarations: [
        AppComponent,
        AngularDefaultPlaceholderComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        TransformModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
