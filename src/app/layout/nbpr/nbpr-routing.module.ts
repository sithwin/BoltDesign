import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbprComponent } from './nbpr.component';

const routes: Routes = [
    {
        path: '', component: NbprComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NbprRoutingModule {
}
