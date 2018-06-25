import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import {
    TabsComponent
} from './components';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ResultRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [
        ResultComponent,
        TabsComponent
    ]
})
export class ResultModule {}
