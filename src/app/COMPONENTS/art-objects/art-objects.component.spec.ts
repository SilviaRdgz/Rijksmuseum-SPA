import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtObjectsComponent } from './art-objects.component';

describe('ArtObjectsComponent', () => {
    let component: ArtObjectsComponent;
    let fixture: ComponentFixture<ArtObjectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtObjectsComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArtObjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
