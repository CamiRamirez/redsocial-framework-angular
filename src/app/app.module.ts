import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ConexionService } from './services/conexion.service';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { AddpublicacionesComponent } from './addpublicaciones/addpublicaciones.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';


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
  
} from '@angular/material';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MuroComponent } from './muro/muro.component';
import { SaludComponent } from './salud/salud.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ActividadesComponent } from './actividades/actividades.component';

const routes: Routes = [
  {
    path:'',
    component: MuroComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
 
  {
    path:'perfil',
    component: PerfilComponent
  },
  {
    path:'muro',
    component: MuroComponent
  },
  {
    path:'salud',
    component: SaludComponent
  },
  {
    path:'alimentacion',
    component: AlimentacionComponent
  },
  {
    path:'noticias',
    component: NoticiasComponent
  },
  {
    path:'actividades',
    component: ActividadesComponent
  },
  {
    path:'preguntas',
    component: PreguntasComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicacionesComponent,
    AddpublicacionesComponent,
    CarruselComponent,
    NotFoundPageComponent,
    LikeDislikeComponent,
    PerfilComponent,
    MuroComponent,
    SaludComponent,
    AlimentacionComponent,
    PreguntasComponent,
    NoticiasComponent,
    ActividadesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }