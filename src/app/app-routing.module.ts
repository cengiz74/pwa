import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailclientComponent } from './detailclient/detailclient.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { CreationclientComponent } from './creationclient/creationclient.component';

import { Routes, RouterModule } from '@angular/router';


import { BesoinDaideComponent } from './besoin-daide/besoin-daide.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MdpOublierComponent } from './mdp-oublier/mdp-oublier.component';

import { CardsComponent } from './cards/cards.component';


const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
   {
    path: 'besoin-daide',
    component: BesoinDaideComponent
  },
   {
    path: 'mdp-oublier',
    component: MdpOublierComponent
  },

  {
    path: 'detailclient/:id',
    component: DetailclientComponent
  },
  {
    path: 'search-client',
    component: SearchClientComponent
  },
  {
    path: 'creationclient',
    component: CreationclientComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },



];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

  declarations: [],
})
export class AppRoutingModule { }
