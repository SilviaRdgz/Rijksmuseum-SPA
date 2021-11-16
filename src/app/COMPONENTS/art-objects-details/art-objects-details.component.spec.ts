import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectsDetailsComponent } from './art-objects-details.component';

describe('ArtObjectsDetailsComponent', () => {
    let component: ArtObjectsDetailsComponent;
    let fixture: ComponentFixture<ArtObjectsDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtObjectsDetailsComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArtObjectsDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
