import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchComponent } from './COMPONENTS/search/search.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { CarouselComponent } from './COMPONENTS/carousel/carousel.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        routingComponents,
        HomeComponent,
        CarouselComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        AppRoutingModule,
    ],
    providers: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
