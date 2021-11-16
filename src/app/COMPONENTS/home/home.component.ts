import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtObject, ArtObjectResponse } from 'src/app/MODEL/art-object';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

    private url = 'https://www.rijksmuseum.nl/api/en/collection?key=lpkF1JsM&ps=100';
    public searchTerms$ = new BehaviorSubject<string>('');
    public filterArtObjects$: Observable<ArtObject[]>;

    artObjects$ : Observable<ArtObject[]>;

    constructor(private http:HttpClient, private route: ActivatedRoute) {}

    handleSearchTerm(searchTerm: string): void {
        this.searchTerms$.next(searchTerm);
    }

    ngOnInit(): void {
        this.artObjects$ = this.http.get<ArtObjectResponse>(this.url)

            .pipe(map((response) => response.artObjects));

        this.filterArtObjects$ = combineLatest([this.artObjects$, this.searchTerms$])
            .pipe(map(([artObjects, searchTerm]) => {
                if (searchTerm === '') {
                    return artObjects;
                }
                return artObjects.filter((artObject) => artObject.title.toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
              || artObject.principalOrFirstMaker.toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase()));
            }));
    }

}
