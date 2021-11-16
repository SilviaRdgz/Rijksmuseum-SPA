// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { ArtObject, ArtObjectResponse} from 'src/app/MODEL/art-object';
// import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
// import {map} from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {
//   private url = 'https://www.rijksmuseum.nl/api/en/collection?key=lpkF1JsM&ps=100';

//   public searchTerms$ = new BehaviorSubject<string>('')
//   public filterArtObjects$: Observable<ArtObject[]>

//   artObjects$ : Observable<ArtObject[]>

//   constructor(private http:HttpClient) { }

//   getArt(): Observable <ArtObject[]> {
//     return this.http.get<ArtObject[]>(this.url)
//     .pipe(map((response) => response.artObjects));
//   }

//   searchArt(term:string) : Observable<ArtObject[]> {
//     this.filterArtObjects$ = combineLatest([this.artObjects$, this.searchTerms$])
//       .pipe(map(([artObjects, searchTerm]) => {
//         if(searchTerm === '') {
//           return artObjects
//         }
//           return artObjects.filter(artObject => {
//            return artObject.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
//               ||  artObject.principalOrFirstMaker.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
//           }
//             )
//       }))
//   }

// }
