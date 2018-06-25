import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbprRoutingModule } from './nbpr-routing.module';
import { NbprComponent } from './nbpr.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, NbprRoutingModule, PageHeaderModule],
    declarations: [NbprComponent]
})
export class NbprModule {}
