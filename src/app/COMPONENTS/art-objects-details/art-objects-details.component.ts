import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArtObject, ArtObjectDetailResponse } from 'src/app/MODEL/art-object';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-art-objects-details',
    templateUrl: './art-objects-details.component.html',
    styleUrls: ['./art-objects-details.component.scss'],
})
export class ArtObjectsDetailsComponent implements OnInit {

    artObject : ArtObject;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private http : HttpClient,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const objectNumber = params.get('objectNumber');
            this.http.get<ArtObjectDetailResponse>(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=lpkF1JsM`)
                .subscribe((item) => {
                    this.artObject = item.artObject;
                });
        });
    }
}
