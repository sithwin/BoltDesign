import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbprComponent } from './nbpr.component';

describe('NbprComponent', () => {
    let component: NbprComponent;
    let fixture: ComponentFixture<NbprComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [NbprComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NbprComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
