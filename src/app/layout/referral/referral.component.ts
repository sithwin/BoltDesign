import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './referral.component.html',
    styleUrls: ['./referral.component.scss'],
    animations: [routerTransition()]
})
export class ReferralComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
