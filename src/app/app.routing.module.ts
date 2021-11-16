import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtObjectsComponent } from 'src/app/COMPONENTS/art-objects/art-objects.component';
import { ArtObjectsDetailsComponent } from 'src/app/COMPONENTS/art-objects-details/art-objects-details.component';
import { HomeComponent } from './COMPONENTS/home/home.component';

const routes : Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'art-object/:objectNumber',
        component: ArtObjectsDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [ArtObjectsComponent, ArtObjectsDetailsComponent];
