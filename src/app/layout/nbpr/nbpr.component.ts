import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './nbpr.component.html',
    styleUrls: ['./nbpr.component.scss'],
    animations: [routerTransition()]
})
export class NbprComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
