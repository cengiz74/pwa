import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientComponent } from './client/client.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HistoriqueComponent } from './historique/historique.component';
import { FormsModule } from '@angular/forms';
import { ClientService} from './client.service';
import { SearchClientComponent } from './search-client/search-client.component';
import { CreationclientComponent } from './creationclient/creationclient.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { BesoinDaideComponent } from './besoin-daide/besoin-daide.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MdpOublierComponent } from './mdp-oublier/mdp-oublier.component';
import { CardsComponent } from './cards/cards.component';



import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
}from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    DetailclientComponent,
    CommandesComponent,
    ClientComponent,
    TicketsComponent,
    HistoriqueComponent,
    SearchClientComponent,
    CreationclientComponent,
    BesoinDaideComponent,
    ConnexionComponent,
    MdpOublierComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
