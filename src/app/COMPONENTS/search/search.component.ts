import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    @Output()
    searchTerm = new EventEmitter<string>();

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if (params.searchTerm) { this.searchTerm = params.searchTerm; }
        });
    }
    search(searchTerm: string): void {
        this.searchTerm.emit(searchTerm);
    }
}
