import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralRoutingModule } from './referral-routing.module';
import { ReferralComponent } from './referral.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ReferralRoutingModule, PageHeaderModule],
    declarations: [ReferralComponent]
})
export class ReferralModule {}
