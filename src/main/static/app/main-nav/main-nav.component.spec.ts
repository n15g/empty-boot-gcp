import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainNavComponent} from './main-nav.component';

describe('MainNavComponent', () => {
    let component: MainNavComponent;
    let fixture: ComponentFixture<MainNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MainNavComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render app name in the navbar-brand', () => {
        const fixture = TestBed.createComponent(MainNavComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.navbar-brand').textContent).toContain('SETME');
    });
});
