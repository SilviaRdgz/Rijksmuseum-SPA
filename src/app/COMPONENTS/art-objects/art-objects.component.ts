import { Component, Input, OnInit } from '@angular/core';
import { ArtObject } from 'src/app/MODEL/art-object';

@Component({
    selector: 'app-art-objects',
    templateUrl: './art-objects.component.html',
    styleUrls: ['./art-objects.component.scss'],
})
export class ArtObjectsComponent implements OnInit {
    @Input()
    artObject: ArtObject;
    ngOnInit(): void {
    }
}
